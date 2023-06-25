# Task-Updater

Task Updater aslında çok basit bir Scrum Board'tur. Çeşitli başlıklar altında tasklar girip daha sonra girilen task veya başlığı değiştirme ve silme imkanı sunar. Kullanımı basit ve sadedir.


# Proje içinden bir GIF 

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTl0eWxnZnI4emNmeHp6MnR2MzF5Z3J2amFqb3IyZWxseWw4MnV6ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cEutPzwuFBKhU8Wmbq/giphy.gif)

## KURULUM

Projeyi başlatmak için önce `npm install` ile projemize kuruyoruz.

Gerekli bağımlılıklar yüklendikten sonra ilgili dizine gidip `npm run dev` komutunu çalıştırıyoruz.

Program girilen başlık ve Task değerlerini göstermek için bir REST API yi taklit etmesi gerekmektedir. Bu sebeple
json-server-npm adında bir paketide projemizle birlikte yükledik.

Json-Server çalıştırmak için ilgili dizine gidip `json-server --watch ./api/db.json` komutunu girmeliyiz. Her şey yolundaysa :3000 portunda serverımız istekleri almaya hazır olacaktır.

json-server-npm hakkında daha fazla bilgi için lütfen ![tıklayınız.](https://www.npmjs.com/package/json-server)

#### Not: Eğer node.js kurulu değilse lütfen ![Node.js](https://nodejs.org/en) kurunuz.





