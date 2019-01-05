# ImgClone

This is a very simple Imgur-like clone with basic functionality, using Amazon S3. Users are able to asynchronously upload files and view them. 

## Getting started

### Install the web application

This project is built on top of the Laravel PHP framework. It's requirements can be found [here](https://laravel.com/docs/5.7/installation#server-requirements).

``` bash
git clone https://github.com/andydeforest/imgclone.git && cd imgclone
composer install
```

Once the composer dependencies are installed, you'll want to install the front-end dependencies

``` bash
npm install && npm run dev
```

Next, you need to make a copy of the `.env.example` file and rename it to `.env` inside your project root and add the appropriate variables:

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_IMAGE_FOLDER=
```

Make sure your variables point to a publicly-configured S3 bucket.

Then start your server:

```
php artisan serve
```

The project should now be running!

## Demo
![Demo GIF](https://thumbs.gfycat.com/OpenDeterminedCalf-size_restricted.gif)

## Attributes
Free Vector Graphics by [www.Vecteezy.com](https://www.vecteezy.com)

Logo icon made by [Freepik](https://www.freepik.com/) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)</a></div>
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details