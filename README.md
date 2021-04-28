# quiz-kanpai

## 環境構築

### laravel
phpフレームワーク。[>>Link](https://coinbaby8.com/laravel55-webapplication-vuejs.html)

### composer 
phpパッケージ管理システム。[>>Link](https://coinbaby8.com/laravel55-webapplication-vuejs.html)  
```
$ cd laravel
$ composer install
```
ßcomposer.jsonのrequire内にあるパッケージをインストールする。パッケージはvendor配下に配置される。[>>Link](https://qiita.com/atwata/items/d6f1cf95ce96ebe58010)


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
$ cp .env.example .env
$ php artisan key:generate
$ php artisan cache:clear
```

## vue環境構築 
### １.？
```
$ npm install
```
### 2.Laravel6.0以上ででVue.jsとBootstrapを使用
#### 2.1 ライブラリインストール
```
$ composer require laravel/ui
```
#### 2.2 Vue,bootstrapの使い方
```
$ php artisan ui vue
```
