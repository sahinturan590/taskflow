# TaskFlow — Görev Yönetim API’si

TaskFlow, bir yazılım ekibinin görevlerini takip etmek için Node.js ve Express ile geliştirilmiş bir REST API’dir. Görev oluşturabilir, bir çalışana atayabilir, önceliğini belirleyebilir ve tamamlandığında durumunu güncelleyebilirsiniz.

## Kurulum ve çalıştırma

Bilgisayarınızda Node.js ve npm kurulu olmalıdır.

1. GitHub depo sayfasında **Code → Download ZIP** seçeneğiyle projeyi indirin ve ZIP dosyasını çıkarın.
2. VS Code’da `package.json` dosyasının bulunduğu klasörü açın.
3. Terminalde bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

4. Sunucuyu başlatın:

   ```bash
   npm start
   ```

5. Tarayıcıda `http://localhost:3000` adresini açın. Sunucu çalışıyorsa `TaskFlow API çalışıyor` mesajını görürsünüz. Postman ile test ederken terminali açık bırakın.

## API uçları

Aşağıdaki yollar `http://localhost:3000` adresine eklenir. `:id` yerine ilgili görevin numarasını yazın.

| Yöntem | Yol | İşlem |
| --- | --- | --- |
| POST | `/tasks` | Yeni görev oluşturur. |
| GET | `/tasks` | Tüm görevleri listeler. |
| GET | `/tasks/:id` | Bir görevin detayını getirir. |
| PUT | `/tasks/:id` | Görevin gönderilen alanlarını günceller. |
| DELETE | `/tasks/:id` | Görevi siler. |

## Örnek kullanım

Postman’da `POST http://localhost:3000/tasks` isteği oluşturun. **Body → raw → JSON** seçip şu veriyi gönderin:

```json
{
  "title": "Sunumu hazırla",
  "assignee": "Şahin",
  "priority": "high"
}
```

Başarılı istekte API `201 Created` ile yeni görevi döndürür. Görev başlangıçta `pending` durumundadır. Yanıttaki `id` değerini kullanarak görevi görüntüleyebilir, güncelleyebilir veya silebilirsiniz.

Görevler sunucunun belleğinde tutulur. Sunucu yeniden başlatıldığında başlangıçtaki örnek görevler yüklenir. Logger, istek yöntemini, adresini ve zamanını terminale yazar.

## Postman testleri

Ekleme, listeleme, detay, güncelleme ve silme işlemlerinin test görüntüleri [screenshots klasöründe](./screenshots/) yer alır.