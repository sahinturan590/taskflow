# TaskFlow — Proje Tanıtım Dokümanı

## Amaç ve senaryo

TaskFlow, bir yazılım ekibinin görevleri kimin üstlendiğini, hangi işlerin öncelikli olduğunu ve hangi görevlerin tamamlandığını takip etmesini sağlayan bir REST API’sidir. Örneğin ekip, “Giriş sayfasını hazırla” başlıklı bir görevi yüksek öncelikle bir geliştiriciye atayabilir. Geliştirici işi bitirdiğinde görevin durumu güncellenir. Ekip güncel durumu görev listesinden veya görevin detayından görebilir.

## Görev modeli

Her görevin benzersiz bir kimliği (id), başlığı (title), açıklaması (description), durumu (status), önceliği (priority), sorumlusu (assignee) ve oluşturulma zamanı (createdAt) vardır. Yeni görev için başlık zorunludur. Sistem kimliği ve oluşturulma zamanını kendisi belirler. Yeni görev pending durumunda açılır. Öncelik belirtilmezse medium kullanılır. Sorumlu daha sonra atanabilir.

## API tasarımı

| İşlem | İstek | Sonuç |
| --- | --- | --- |
| Görev oluşturma | POST /tasks | Yeni görevi 201 durum koduyla döndürür. |
| Listeleme | GET /tasks | Görevleri JSON listesi olarak döndürür. |
| Detay | GET /tasks/:id | Kimliği verilen görevi getirir. |
| Güncelleme | PUT /tasks/:id | Gönderilen alanları değiştirip güncel görevi döndürür. |
| Silme | DELETE /tasks/:id | Görevi kaldırır ve silinen kaydı döndürür. |

Başlıksız bir oluşturma isteği 400, bulunmayan bir göreve yönelik detay, güncelleme veya silme isteği 404 sonucunu verir.

## Çalışma yapısı

Uygulama Node.js ve Express ile geliştirilmiştir. app.js sunucuyu başlatır. Yönlendirme katmanı isteği ilgili görev işlemine iletir. Logger, isteğin HTTP yöntemini, adresini ve zamanını terminale yazar. Görevler sunucu belleğinde tutulur. Sunucu yeniden başlatıldığında örnek görevler yeniden yüklenir.
