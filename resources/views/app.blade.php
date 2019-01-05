<!doctype html>
<html lang="en">
	<head>
		<title>ImgClone</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
	</head>
	<body>
		<div id="app"></div>
		<script src="{{ URL::asset('js/app.js') }}"></script>
	</body>
</html>