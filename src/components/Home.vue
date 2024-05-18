<template>
  <div>
    <div v-if="user" class="content">
      <h1 class="heading-primary">Hoş Geldiniz Kestir'e!</h1>
      <p class="intro-text">
        Kestir, kullanıcıların konum bilgilerini kullanarak çevrelerindeki
        işletmeleri keşfetmelerini ve kolayca randevu almalarını sağlayan bir
        platformdur. Özellikle kuaför ve güzellik salonları başta olmak üzere,
        farklı işletme türlerine de hizmet verecek şekilde tasarlanmıştır.
      </p>
      <div class="section">
        <h2>Nasıl Çalışır?</h2>
        <p>
          Kullanıcılar, işletmelerin boş randevu zamanlarını görüntüleyebilir,
          değerlendirmelerini okuyarak hizmetler hakkında ön bilgi edinebilir ve
          deneyimlerini fotoğraflı yorumlarla paylaşabilirler.
        </p>
        <img src="/assets/how-it-works.png" alt="İlgili RESİM" />
      </div>
      <div class="section">
        <h2>Özellikler</h2>
        <ul>
          <li>Modern ve kullanıcı dostu arayüz</li>
          <li>
            Detaylı işletme profilleri ve gerçek zamanlı randevu güncellemeleri
          </li>
          <li>Fotoğraflı yorumlar ve interaktif değerlendirme sistemi</li>
        </ul>
      </div>
      <div class="section">
        <h2>Gelecekteki Planlar</h2>
        <p>
          Uygulamanın gelecekteki güncellemeleri arasında, yapay zeka destekli
          hizmet öneri sistemleri, kullanıcı davranışlarını analiz ederek
          kişiselleştirilmiş hizmet önerileri sunmayı amaçlamaktadır.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
    };

    return { handleClick, user };
  },
};
</script>

<style>
.content {
  padding: 20px;
  margin: 0 auto;
  max-width: 1000px; /* Daha geniş bir maksimum genişlik */
  text-align: left;
  background-color: #fff; /* Arka plan rengi */
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: hidden; /* Yatay kaydırmayı engeller */
  overflow-y: auto; /* Dikey kaydırmayı gerektiği zaman aktive eder */
}

.heading-primary {
  color: #ff4343; /* Ana başlık için canlı bir renk */
  font-size: 28px;
  margin-bottom: 20px;
}

.intro-text,
.section p {
  color: #555; /* Metin için daha koyu bir gri ton */
  font-size: 18px;
  line-height: 1.7;
}

.section {
  margin-top: 40px;
  padding: 20px;
  background-color: #f9f9f9; /* Bölümlere arka plan rengi */
  border-radius: 8px;
}

.section h2 {
  font-size: 24px;
  color: #333;
}

.section ul {
  list-style-type: none;
  padding: 0;
}

.section li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.section img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
}
</style>
