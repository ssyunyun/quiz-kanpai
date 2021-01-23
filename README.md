# quiz-kanpai

## 環境構築

### laravel
phpフレームワーク。[>>Link](https://coinbaby8.com/laravel55-webapplication-vuejs.html)

### composer 
phpパッケージ管理システム。[>>Link](https://coinbaby8.com/laravel55-webapplication-vuejs.html)  
`$ composer install` で composer.jsonのrequire内にあるパッケージをインストールする。パッケージはvendor配下に配置される。[>>Link](https://qiita.com/atwata/items/d6f1cf95ce96ebe58010)


## 起動方法
```
$ cd laravel
$ php artisan serve
```
その後 http://localhost:8000 にアクセス

## その他メモ
1. 初回起動時、500 Server Error について
.envファイルがない場合、以下の手順で作成する。  
```
$ copy .env.example .env
$ php artisan key:generate
$ php artisan cache:clear
```
