# Ders 1 - TailwindCSS Kurulum, Flexbox ve Grid Yapısı

## Kurulum

> TailwindCSS'i bilgisayarımıza kurmak için şu komutu yazıyoruz;
```
 npm install -D tailwindcss
```

> TailwindCSS'i projemize kurmak için şu komutu yazıyoruz;
```
 npx tailwindcss init
```

Eğer ki bilgisayarımızda tailwind kurulu ise ilk komutu atlayabiliriz. Bu komutların işe yaraması için de NodeJS [https://nodejs.org/tr/] kurulu olması gereklidir.

> Tailwind'i çalıştırmak;
```
 npx tailwindcss -i ./input.css -o ./output.css --watch
```

Burada input.css gerekli durumlarda stil kodlarını yazacağımız dosyayı belirtir. Output.css, input'tan veya sınıf içinde yazdığımız stillerden kendi başına oluşur.

## Flex

Bir sayfayı belirli kurallara göre şekillendirmemizi sağlar. İçindeki elementlerin konumlarını, görüntüsünü ve sıralanışını etkiler.

> Row (Sıra)
> Col (Sütun)
> Start (Başlangıç)
> End (Son)
> Center (Orta)
> Between (Aralarında)
> Evenly (Eşit)

## Grid

Sayfayı belirli kurallara göre şekillendirir. Flex'ten farkı iki boyutta çalışabilmemize olanak sağlar. Örneğin flex yapısında bütün elementleri yan yana yazdırabilirken grid yapısında yan yana en fazla 3 tane olsun diyebiliriz artan elementler alt sıraya geçer.

> Grid-flow (Akış)

Sıra veya sütun olarak şemayı belirlememizi sağlar

> Gap

Elementler arasındaki boşluğu tanımlar. Birbirinden uzaklaştırmak için kullanılır.

## License

MIT