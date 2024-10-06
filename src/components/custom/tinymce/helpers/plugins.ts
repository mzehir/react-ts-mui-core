// https://www.tiny.cloud/docs/tinymce/latest/plugins/
interface Plugin {
  key: string;
  active: boolean;
}

export const openSoucePlugins: { [key: string]: Plugin } = {
  // Desc en: Create expandable and collapsible sections.
  // Desc tr: Genişletilebilir ve daraltılabilir bölümler oluşturun.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/accordion/
  Accordion: { key: 'accordion', active: true },

  // Desc en: Insert anchors (sometimes referred to as a bookmarks).
  // Desc tr: İçerik içinde sabit bağlantılar (yer işareti) ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/anchor/
  Anchor: { key: 'anchor', active: true },

  // Desc en: Automatically create hyperlinks.
  // Desc tr: Otomatik olarak köprüler oluşturun.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/autolink/
  Autolink: { key: 'autolink', active: true },

  // Desc en: Automatically resize TinyMCE to fit content.
  // Desc tr: İçeriğe uygun şekilde TinyMCE'nin otomatik boyutlandırılması.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/autoresize/
  Autoresize: { key: 'autoresize', active: true },

  // Desc en: Automatically save content in your local browser.
  // Desc tr: İçeriği yerel tarayıcınızda otomatik olarak kaydedin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/autosave/
  Autosave: { key: 'autosave', active: true },

  // Desc en: Insert special characters into TinyMCE.
  // Desc tr: TinyMCE'ye özel karakterler ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/charmap/
  CharacterMap: { key: 'charmap', active: true },

  // Desc en: Edit your content’s HTML source.
  // Desc tr: İçeriğinizin HTML kaynağını düzenleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/code/
  Code: { key: 'code', active: true },

  // Desc en: Insert and embed syntax highlighted code snippets.
  // Desc tr: Söz dizimi vurgulamalı kod parçacıkları ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/codesample/
  CodeSample: { key: 'codesample', active: true },

  // Desc en: Toolbar buttons for setting the left-to-right or right-to-left direction of content.
  // Desc tr: İçeriğin sol-sağ veya sağ-sol yönünü ayarlamak için araç çubuğu düğmeleri.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/directionality/
  Directionality: { key: 'directionality', active: true },

  // Desc en: Bring a smiley to your content.
  // Desc tr: İçeriğinize emoji ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/emoticons/
  Emoticons: { key: 'emoticons', active: true },

  // Desc en: Zoom TinyMCE up to the whole screen.
  // Desc tr: TinyMCE'yi tam ekran moduna getirin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/fullscreen/
  FullScreen: { key: 'fullscreen', active: true },

  // Desc en: Shows the help dialog.
  // Desc tr: Yardım penceresini gösterir.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/help/
  Help: { key: 'help', active: true },

  // Desc en: Insert an image into TinyMCE.
  // Desc tr: TinyMCE'ye resim ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/image/
  Image: { key: 'image', active: true },

  // Desc en: Automatically populate CSS class names into the Format dropdown.
  // Desc tr: Format açılır menüsüne otomatik olarak CSS sınıf adlarını ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/importcss/
  ImportCSS: { key: 'importcss', active: true },

  // Desc en: Insert the current date and/or time into TinyMCE.
  // Desc tr: TinyMCE'ye güncel tarih ve/veya saat ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/insertdatetime/
  InsertDateTime: { key: 'insertdatetime', active: true },

  // Desc en: Add hyperlinks to content.
  // Desc tr: İçeriğe köprü ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/link/
  Link: { key: 'link', active: true },

  // Desc en: Normalize list behavior between browsers.
  // Desc tr: Tarayıcılar arasında liste davranışlarını normalize edin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/lists/
  Lists: { key: 'lists', active: true },

  // Desc en: Create styled number and bulleted lists.
  // Desc tr: Şekillendirilmiş numaralı ve madde işaretli listeler oluşturun.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/advlist/
  ListStyles: { key: 'advlist', active: true },

  // Desc en: Add HTML5 video and audio elements.
  // Desc tr: HTML5 video ve ses öğeleri ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/media/
  Media: { key: 'media', active: true },

  // Desc en: Insert a nonbreaking space.
  // Desc tr: Bölünmeyen boşluk ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/nonbreaking/
  NonbreakingSpace: { key: 'nonbreaking', active: true },

  // Desc en: Add a page break.
  // Desc tr: Sayfa sonu ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/pagebreak/
  PageBreak: { key: 'pagebreak', active: true },

  // Desc en: Show a dialog of the current content in read-only format.
  // Desc tr: Mevcut içeriği yalnızca okuma formatında gösteren bir dialog.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/preview/
  Preview: { key: 'preview', active: true },

  // Desc en: User interface controls to create content faster.
  // Desc tr: İçeriği daha hızlı oluşturmak için kullanıcı arayüzü kontrolleri.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/quickbars/
  QuickToolbars: { key: 'quickbars', active: true },

  // Desc en: Add a save button to the TinyMCE toolbar.
  // Desc tr: TinyMCE araç çubuğuna kaydet butonu ekleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/save/
  Save: { key: 'save', active: true },

  // Desc en: Find and replace content in TinyMCE.
  // Desc tr: TinyMCE'de içerik bul ve değiştir işlemi yapın.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/searchreplace/
  SearchAndReplace: { key: 'searchreplace', active: true },

  // Desc en: Table editing features.
  // Desc tr: Tablo düzenleme özellikleri.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/table/
  Table: { key: 'table', active: true },

  // Desc en: Allow a user to see block level elements such as paragraphs.
  // Desc tr: Kullanıcının paragraflar gibi blok düzeyinde öğeleri görmesine izin verin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/visualblocks/
  VisualBlocks: { key: 'visualblocks', active: true },

  // Desc en: See invisible characters such as non-breaking spaces.
  // Desc tr: Bölünmeyen boşluklar gibi görünmez karakterleri görüntüleyin.
  // Detail Link: https://www.tiny.cloud/docs/tinymce/latest/visualchars/
  VisualCharacters: { key: 'visualchars', active: true },
};
