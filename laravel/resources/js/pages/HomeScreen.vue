<template>
  <body>
    <div id="app">
      <h1>Quiz-Kanpai</h1>
      <p>ユーザ名: <input /></p>
      <button  v-on:click="showMessage"><router-link to="/ReaderStandbyScreen">部屋を作る</router-link></button>
      <button v-on:click="showMessage">部屋を探す</button>
    </div>
  </body>
</template>