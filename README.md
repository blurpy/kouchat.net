KouChat home page
=======

Here are the sources for the www.kouchat.net home page,
served using GitHub Pages and Jekyll.

You need `ruby-devel`, `gcc`, `gcc-c++` and `zlib-devel`. 

To install gems:
```
$ sudo gem install jekyll bundler
$ bundle install
```

To update gems:
```
$ bundle update --bundler
$ bundle update github-pages
```

To run the server:
```
$ ./start.sh
```

See https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/ for details.

Copyright 2014-2021 Christian Ihle

The site uses a modified [Architect theme](https://github.com/jasonlong/architect-theme) by Jason Long,
licensed under the [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).
