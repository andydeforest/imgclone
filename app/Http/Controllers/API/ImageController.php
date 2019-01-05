<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Validator;

class ImageController extends Controller {

	public function get() {
		$url = 'https://s3.' . env('AWS_DEFAULT_REGION') . '.amazonaws.com/' . env('AWS_BUCKET') . '/';
		$images = [];

		$s3 = Storage::disk('s3');
		$folder = env('AWS_IMAGE_FOLDER');

		$files = $s3->files($folder);
		foreach($files as $file) {
			$modified = new \DateTime();
			$modified->setTimestamp($s3->lastModified($file));
			array_push($images, ['name' => str_replace($folder.'/', '', $file), 'src' => $url . $file, 'modified' => $modified]);
		}
		return ['success' => true, 'images' => $images];
	}

    public function store(Request $request) {
		// validate input
        $validator = Validator::make($request->all(), [
			'file' => 'required|image|max:2048'
		], [
			'file.required' => 'No file was provided.',
			'file.image' => 'Image files only.',
			'file.max' => 'Image exceeded 2MB.'
		]);
        if($validator->fails()) {
			return ['success' => false, 'errors' => $validator->errors()];
		}
		// Store the file on S3
		if($request->hasFile('file')) {
			$file = $request->file('file');
			$name = time() . $file->getClientOriginalName();
			$filePath = env('AWS_IMAGE_FOLDER').'/' . $name;
			Storage::disk('s3')->put($filePath, file_get_contents($file));
			return ['success' => true];
		}
		return ['success' => false, 'errors' => ['File upload could not be completed']];
	}
}
