import React from 'react';
import { DashboardCard } from '../helper';
import GridComp from '../../../../../components/base/grid/Grid';
import CardHeaderComp from '../../../../../components/base/cardHeader/CardHeader';
import CardContentComp from '../../../../../components/base/cardContent/CardContent';
import TypographyComp from '../../../../../components/base/typography/Typography';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const HeaderSection: React.FC = () => {
  return (
    <GridComp container spacing={5}>
      <GridComp item xs={12}>
        <DashboardCard>
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
              DevStarter, geliştiricilere modern web projelerine hızlı ve verimli bir başlangıç yapma fırsatı sunan,
              React, Material UI ve Vite ile oluşturulmuş güçlü bir başlangıç projesidir. Material UI, proje boyunca
              sağladığı performanslı ve şık bileşenlerle esneklik sunarken, Vite ise hızlı derleme ve geliştirme
              süreçleriyle projenin temelini oluşturmaktadır. Bu iki araç, modern uygulama geliştirme süreçlerini daha
              akıcı hale getirerek, geliştiricilerin üretkenliğini en üst düzeye çıkarır.
            </TypographyComp>

            <TypographyComp variant="button">
              DevStarter, sadece tasarımda değil, veri yönetiminde de Redux Toolkit ve RTK Query gibi güçlü araçları
              entegre ederek, frontend ve backend arasındaki iletişimi hızlandırır. Bu sayede dış servislere istek atma,
              verileri yönetme ve senkronizasyon süreçleri daha kolay hale gelir. TypeScript ile tamamen tip güvenliği
              sağlanan proje, her adımda geliştiricilere daha az hata ve daha iyi kod yazma deneyimi sunar.
            </TypographyComp>

            <TypographyComp variant="button">
              Bileşen tabanlı yapı ise projeye esneklik kazandıran bir diğer önemli özelliktir. Base, custom ve advanced
              bileşenler sayesinde projede yeniden kullanılabilir modüller oluşturmak ve bu modülleri özelleştirmek
              oldukça basittir. DevStarter’ın modüler dil yapısı, çoklu dil desteği ile birlikte gelir ve bu sayede
              projeye yeni diller eklemek son derece kolaydır.
            </TypographyComp>

            <br />
            <br />

            <TypographyComp variant="button">
              Kısacası DevStarter, modern web geliştirme için ihtiyaç duyduğunuz tüm güçlü araçları bir araya getiren ve
              her seviyeden geliştiriciye hitap eden bir başlangıç projesidir. İsterseniz hemen aşağıda yer alan
              paketler ile DevStarter'ı daha detaylı keşfedin ve projelerinize güç katacak araçları inceleyin:
            </TypographyComp>
          </CardContentComp>
        </DashboardCard>
      </GridComp>
    </GridComp>
  );
};

export default HeaderSection;
