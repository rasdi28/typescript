# typescript


## Belajar Basic TypeScipt

langkah-langkah running file Typescript

1. buat sebuah folder dengan nama src. 
> folder ini berisi file Typescript yang ingin dibuat

2. buat sebuah folder dengan nama build
> folder ini berisi file Javascript hasil build Typescript

3. ketikkan perintah dalam cmd
```
tsc --init
```
perintah diatas untuk memunculkan file tsconfig.json

4. buat sebuah file dalam src dengan akhiran .ts
5. running file tersebut dengan perintah

```
tsc
```

maka file ts akan mengcompaild sebuah file Js kedalam folder build kemudian ketikkan di cmd
```
node build\namafile.js
```

kedua langkah diatas bisa dipersingkat dengan  cara
```
tsc && node build\namafile.js

```