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
composer.jsonのrequire内にあるパッケージをインストールする。パッケージはvendor配下に配置される。[>>Link](https://qiita.com/atwata/items/d6f1cf95ce96ebe58010)


## 起動方法
```
$ cd laravel
$ php artisan serve
```
その後 http://localhost:8000 にアクセス

### ※500 Server Error
.envファイルがない場合、以下の手順で作成する。  
```
$ cp .env.example .env
$ php artisan key:generate
$ php artisan cache:clear
```

## vue　ビルドまでの道のり
### 1.npmの宣言？
下記コマンド実行後、全てEnter
```
$ npm init
```
### ２.npmのインストール
npmリポジトリからライブラリ（正確にはパッケージと呼びます）をダウンロードするコマンド  
ライブラリそのものは下記のサイトから取得されます。  
https://www.npmjs.com/
```
$ npm install
```
### 3.ビルドの実行
```
$ npm run dev
```
npm scriptsと呼ばれるタスク実行機能を呼び出すコマンド  
package.json内に書かれたシェルスクリプトを実行するだけ

