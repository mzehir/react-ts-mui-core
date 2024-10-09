import React from 'react';
import { DashboardCard } from '../helper';
import GridComp from '../../../../../components/base/grid/Grid';
import CardHeaderComp from '../../../../../components/base/cardHeader/CardHeader';
import CardContentComp from '../../../../../components/base/cardContent/CardContent';
import TypographyComp from '../../../../../components/base/typography/Typography';
import SliderComp from '../../../../../components/custom/reactSlick/Slider';
import CampaignIcon from '@mui/icons-material/Campaign';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const HeaderSection: React.FC = () => {
  const [sliderItems] = React.useState([
    {
      title: 'Vite ile Güç ve Hız',
      avatar: CampaignIcon,
      content: `Vite, projemizde en kritik yapı taşı olarak görev alıyor. Hızlı başlatma süresi ve minimum yapılandırma
                gereksinimi ile öne çıkan Vite, geliştirme sürecini inanılmaz derecede hızlandırıyor. Özellikle, sıcak
                modül yenileme (HMR) özelliği ile projeyi geliştirme aşamasında anında geri bildirim almanızı sağlıyor.
                Ayrıca Vite'nin sunduğu optimize edilmiş üretim yapısı, uygulamanızın son kullanıcılara en hızlı ve
                sorunsuz şekilde ulaşmasını sağlar. Projeye dahil ettiğimiz Vite, modern projelerin hız ihtiyacına tam
                anlamıyla cevap veriyor ve geliştiricilere büyük bir kolaylık sağlıyor.`,
    },
    {
      title: 'Material UI: Estetik ve Kullanışlılık',
      avatar: CampaignIcon,
      content: `DevStarter projemizin kullanıcı arayüzünde Material UI (MUI) kütüphanesini tercih ettik. MUI, hem
                estetik hem de işlevsellik açısından mükemmel bileşenler sunarak, kullanıcı dostu bir deneyim
                sağlamamıza yardımcı oldu. Geniş bileşen kütüphanesi sayesinde, modüler yapıyı destekleyen projede her
                türden form, buton, tablo gibi UI öğeleri kolayca entegre edilebiliyor. MUI, hızla gelişen uygulamalarda
                tasarım bütünlüğünü ve esnekliği koruyarak DevStarter'ı kullanıcılar için güçlü bir araç haline
                getiriyor. Ayrıca, MUI'nın sağladığı tema desteği ile projenizi istediğiniz gibi özelleştirebilirsiniz.`,
    },
    {
      title: 'Modüler Yapı ile Esneklik',
      avatar: CampaignIcon,
      content: `DevStarter, modüler yapısı ile öne çıkıyor. Uygulamada kullandığımız tüm bileşenler "base", "custom" ve
                "advanced" olarak kategorize edilmiş durumda. Bu sayede, uygulamanızda ihtiyaç duyduğunuz her seviyede
                özelleştirme yapabilir ve projeyi istediğiniz gibi genişletebilirsiniz. Modüler yapının avantajı, sadece
                ihtiyaç duyduğunuz bileşenleri projenize dahil ederek daha hafif ve verimli bir uygulama oluşturmanızı
                sağlamasıdır. Ayrıca bu yapı, geliştiricilere projelerini hızlı bir şekilde ölçeklendirme imkanı
                sunuyor.`,
    },
    {
      title: 'React Hook Form ve Yup ile Güçlü Form Yönetimi',
      avatar: CampaignIcon,
      content: `Form doğrulama ve yönetiminde projede React Hook Form ve Yup kullanıldı. Bu iki kütüphane sayesinde form
                işlemlerini basit, esnek ve performanslı bir şekilde yönetmek mümkün. Yup ile güçlü doğrulama kuralları
                ekleyebilir, React Hook Form ile de form verilerini kolayca işleyebilirsiniz. Özellikle büyük projelerde
                form yönetiminin karmaşıklığını çözmek için bu iki kütüphanenin birleşimi, DevStarter'a esneklik ve
                verimlilik kattı. Kullanıcılar, formlarını minimal kodla yönetebilirken aynı zamanda yüksek performans
                elde ediyor.`,
    },
    {
      title: 'Redux Toolkit & RTK Query: Veri Yönetiminde Güvenilirlik',
      avatar: CampaignIcon,
      content: `Projemizde veri yönetimi için Redux Toolkit ve RTK Query kullanıyoruz. Redux Toolkit, veri yönetimini
                daha sade ve anlaşılır hale getirirken, RTK Query ise veri sorgularını optimize ederek geliştiricilerin
                daha az kodla daha çok iş yapmasına olanak tanıyor. Projenizde backend ile haberleşme ihtiyacını hızlı
                ve güvenilir bir şekilde karşılayabilir, veri senkronizasyonu gibi işlemleri sorunsuzca
                gerçekleştirebilirsiniz. Bu yapı, projenizi büyütürken veri yönetiminde hata yapma riskini minimuma
                indirir.`,
    },
    {
      title: 'i18n ile Çok Dilli Destek',
      avatar: CampaignIcon,
      content: `DevStarter, kullanıcıların farklı dillerde hizmet alabileceği şekilde tasarlandı. Şu anda Türkçe,
                İngilizce ve Almanca dillerinde çalışan projede, çoklu dil desteği modüler bir yapı ile oluşturulmuştur.
                Bu, uygulamanızın herhangi bir dilde rahatlıkla çalışabilmesini sağlar ve global pazarlara açılmanıza
                olanak tanır. Her dil, ayrı bir dil dosyasından yönetilmekte ve kullanıcıya sunulan tüm metinler bu
                dosyalardan çekilmektedir. Yeni bir dil eklemek oldukça basit ve projeyi her ölçekte kullanılabilir hale
                getirir.`,
    },
    {
      title: 'TinyMCE: Gelişmiş Metin Editörü Desteği',
      avatar: CampaignIcon,
      content: `DevStarter, kullanıcıların metin girişi ihtiyaçlarını en profesyonel şekilde karşılamak için TinyMCE
                metin editörü ile donatıldı. TinyMCE, zengin metin düzenleme seçenekleri sunarak hem basit hem de
                gelişmiş düzenleme ihtiyaçlarınıza yanıt verir. İster basit bir metin alanı, ister zengin içerik üretmek
                isteyen kullanıcılar için TinyMCE, sezgisel ve güçlü bir araç sunar. Ayrıca, modüler yapısı sayesinde
                ihtiyacınıza göre özelleştirilebilir ve genişletilebilir. DevStarter'ın TinyMCE entegrasyonu ile
                projelerinizde gelişmiş metin düzenleme özelliklerinden kolayca faydalanabilirsiniz.`,
    },
    {
      title: 'Prettier ve ESLint: Kod Düzenleme ve Kalite Kontrolünde Kusursuzluk',
      avatar: CampaignIcon,
      content: `DevStarter projemizde kod kalitesini en üst düzeyde tutmak için Prettier ve ESLint'i entegre ettik.
                Prettier, kodunuzu düzenli ve okunabilir hale getirirken, manuel düzenleme ihtiyacını ortadan kaldırarak
                geliştiricilere zaman kazandırıyor. Kod formatlama kurallarına tam uyum sağlayarak, ekip içindeki
                standartları koruyor ve projede tutarlı bir yazım tarzı oluşturuyor. ESLint ise kodunuzu analiz ederek
                olası hataları önceden tespit eder ve en iyi uygulamaları takip etmenizi sağlar. Bu iki araç bir arada,
                hem geliştirme sürecinde hatasız bir deneyim yaşatır hem de kodunuzu her zaman en iyi haliyle tutar.
                Projenizin bakımını kolaylaştırırken, kod kalitesini garanti altına alır.`,
    },
    {
      title: 'Guard Sistemi: Güvenlikte Esneklik',
      avatar: CampaignIcon,
      content: `DevStarter'da oturum yönetiminde, her bir kullanıcının yetkilendirilmiş sayfalara erişimini kontrol eden
                bir Guard yapısı bulunuyor. Bu yapı, sınırsız kullanıcı tipini destekleyerek her kullanıcı tipine özgü
                erişim seviyeleri belirlemenizi sağlıyor. Örneğin, bir "öğretmen" tipi kullanıcı, "öğrenci" tipi bir
                kullanıcının göremeyeceği özel bir sayfaya erişebilirken, aynı zamanda "misafir" tipi kullanıcılar
                sadece genel erişim sayfalarını görüntüleyebilir. Bu esneklik, uygulamanızı çok katmanlı bir erişim
                kontrol mekanizmasıyla donatmanızı sağlar. DevStarter, projelerinizde güvenli ve özelleştirilebilir
                oturum yönetimini sağlamanın en iyi yoludur.`,
    },
  ]);

  return (
    <GridComp container spacing={5}>
      <GridComp item xs={12}>
        <DashboardCard sx={{ height: '100%' }}>
          <CardHeaderComp
            avatar={<WavingHandIcon />}
            title="Merhaba, DevStarter'a hoş geldin!"
            subheader={
              <TypographyComp variant="button">
                DevStarter: Geliştiricilere Hız, Esneklik ve Güç Sunan Başlangıç Projesi
              </TypographyComp>
            }
          />
          <CardContentComp>
            <TypographyComp variant="button">
              DevStarter, modern web uygulamaları geliştirmek isteyen geliştiriciler için tasarlanmış, hız ve verimlilik
              odaklı bir başlangıç projesidir. Proje, en popüler ve en performanslı kütüphanelerle donatılmıştır; React,
              Vite, TypeScript, Redux Toolkit, Material UI, ve daha birçok güçlü araç ile desteklenmektedir. Bu altyapı,
              sıfırdan bir proje başlatırken en sık karşılaşılan zorlukları çözmek için tasarlanmıştır. Artık
              performans, ölçeklenebilirlik ve modüler yapı gibi kritik konular için endişelenmenize gerek kalmadan,
              geliştirme sürecinize odaklanabilirsiniz.
            </TypographyComp>
          </CardContentComp>
        </DashboardCard>
      </GridComp>

      <GridComp item xs={12}>
        <SliderComp>
          {sliderItems.map((item, index) => (
            <DashboardCard
              key={index.toString()}
              sx={{ height: '100%', background: 'transparent !important', boxShadow: 'none' }}
            >
              <CardHeaderComp avatar={<item.avatar />} title={item.title} />
              <CardContentComp>
                <TypographyComp variant="button">{item.content}</TypographyComp>
              </CardContentComp>
            </DashboardCard>
          ))}
        </SliderComp>
      </GridComp>
    </GridComp>
  );
};

export default HeaderSection;
