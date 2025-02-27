import type { Schema, Struct } from '@strapi/strapi';

export interface BdfhHju extends Struct.ComponentSchema {
  collectionName: 'components_bdfh_hjus';
  info: {
    displayName: 'hju';
  };
  attributes: {};
}

export interface CechyLudzkieDlaKierunkuCechyLudzkieDlaKierunku
  extends Struct.ComponentSchema {
  collectionName: 'components_cechy_ludzkie_dla_kierunku_cechy_ludzkie_dla_kierunkus';
  info: {
    displayName: 'cechy_ludzkie_dla_kierunku';
    icon: 'cog';
  };
  attributes: {
    cechy_ludzkie_dla_kierunku: Schema.Attribute.String;
  };
}

export interface KierunekKierunek extends Struct.ComponentSchema {
  collectionName: 'components_kierunek_kieruneks';
  info: {
    description: '';
    displayName: 'kierunek';
    icon: 'book';
  };
  attributes: {
    cechy_ludzkie_dla_kierunku: Schema.Attribute.Component<
      'cechy-ludzkie-dla-kierunku.cechy-ludzkie-dla-kierunku',
      true
    >;
    galeria: Schema.Attribute.Media<'images' | 'videos', true>;
    glowne_zdjecie: Schema.Attribute.Media<'images'>;
    liczba_oddzialow: Schema.Attribute.Decimal;
    liczba_uczniow: Schema.Attribute.Integer;
    mozliwosci_rozwoju: Schema.Attribute.Component<
      'mozliwosci-rozwoju.mozliwosci-rozwoju',
      true
    >;
    nazwa_kierunku: Schema.Attribute.String & Schema.Attribute.Required;
    opis_kierunku: Schema.Attribute.RichText;
    praca: Schema.Attribute.Component<'praca.praca', true>;
    punktowane_przedmioty: Schema.Attribute.String;
    rozszerzone_przedmioty: Schema.Attribute.String;
    slogan_koniec: Schema.Attribute.String;
    slogan_start: Schema.Attribute.String;
    umiejetnosci: Schema.Attribute.Component<'umiejetnosci.umiejetnosci', true>;
    warunki_pracy: Schema.Attribute.Component<
      'warunki-pracy.warunki-pracy',
      true
    >;
  };
}

export interface KwalifikacjaKwalifikacja extends Struct.ComponentSchema {
  collectionName: 'components_kwalifikacja_kwalifikacjas';
  info: {
    displayName: 'kwalifikacja';
    icon: 'bulletList';
  };
  attributes: {
    kod_kwalifikacji: Schema.Attribute.String & Schema.Attribute.Required;
    nazwa_kwalifikacji: Schema.Attribute.String & Schema.Attribute.Required;
    opis_kwalifikacji: Schema.Attribute.Text;
  };
}

export interface ListaKierunkowListaKierunkow extends Struct.ComponentSchema {
  collectionName: 'components_lista_kierunkow_lista_kierunkows';
  info: {
    description: '';
    displayName: 'lista_kierunkow';
    icon: 'arrowUp';
  };
  attributes: {
    kierunek: Schema.Attribute.Component<'kierunek.kierunek', false> &
      Schema.Attribute.Required;
  };
}

export interface ListaKwalifikacjiListaKwalifikacji
  extends Struct.ComponentSchema {
  collectionName: 'components_lista_kwalifikacji_lista_kwalifikacjis';
  info: {
    description: '';
    displayName: 'lista_kwalifikacji';
    icon: 'apps';
  };
  attributes: {
    kwalifikacja: Schema.Attribute.Component<
      'kwalifikacja.kwalifikacja',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ListaZawodowListaZawodow extends Struct.ComponentSchema {
  collectionName: 'components_lista_zawodow_lista_zawodows';
  info: {
    description: '';
    displayName: 'Lista zawod\u00F3w';
    icon: 'collapse';
  };
  attributes: {
    zawod: Schema.Attribute.Component<'zawod.zawod', false> &
      Schema.Attribute.Required;
  };
}

export interface LokalizacjaLokalizacja extends Struct.ComponentSchema {
  collectionName: 'components_lokalizacja_lokalizacjas';
  info: {
    description: '';
    displayName: 'lokalizacja';
    icon: 'alien';
  };
  attributes: {
    dlugosc_geograficzna_szkoly: Schema.Attribute.Decimal &
      Schema.Attribute.Required;
    szerokosc_geograficzna_szkoly: Schema.Attribute.Decimal &
      Schema.Attribute.Required;
  };
}

export interface MozliwosciRozwojuMozliwosciRozwoju
  extends Struct.ComponentSchema {
  collectionName: 'components_mozliwosci_rozwoju_mozliwosci_rozwojus';
  info: {
    displayName: 'mozliwosci_rozwoju';
    icon: 'bold';
  };
  attributes: {
    mozliwosci_rozwoju: Schema.Attribute.String;
  };
}

export interface PracaPraca extends Struct.ComponentSchema {
  collectionName: 'components_praca_pracas';
  info: {
    displayName: 'praca';
  };
  attributes: {
    praca: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RodzajeSzkolyRodzajeSzkoly extends Struct.ComponentSchema {
  collectionName: 'components_rodzaje_szkoly_rodzaje_szkolies';
  info: {
    description: '';
    displayName: 'rodzaje_szkoly';
    icon: 'chartBubble';
  };
  attributes: {
    liceum: Schema.Attribute.Component<'szkola.szkola', false>;
    szkola_zawodowa: Schema.Attribute.Component<'szkola.szkola', false>;
    technikum: Schema.Attribute.Component<'szkola.szkola', false>;
  };
}

export interface SzkolaSzkola extends Struct.ComponentSchema {
  collectionName: 'components_szkola_szkolas';
  info: {
    description: '';
    displayName: 'szkola';
    icon: 'alien';
  };
  attributes: {
    lista_kierunkow: Schema.Attribute.Component<
      'lista-kierunkow.lista-kierunkow',
      true
    >;
    opis_typu_szkoly: Schema.Attribute.RichText;
  };
}

export interface TypSzkolyTypSzkoly extends Struct.ComponentSchema {
  collectionName: 'components_typ_szkoly_typ_szkolies';
  info: {
    displayName: 'typ_szkoly';
    icon: 'archive';
  };
  attributes: {
    opis_typu_szkoly: Schema.Attribute.Boolean;
  };
}

export interface UmiejetnosciUmiejetnosci extends Struct.ComponentSchema {
  collectionName: 'components_umiejetnosci_umiejetnoscis';
  info: {
    description: '';
    displayName: 'umiejetnosci';
    icon: 'book';
  };
  attributes: {
    umiejetnosc: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WarunkiPracyWarunkiPracy extends Struct.ComponentSchema {
  collectionName: 'components_warunki_pracy_warunki_pracies';
  info: {
    displayName: 'warunki_pracy';
    icon: 'bold';
  };
  attributes: {
    cechy_pracy: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ZawodZawod extends Struct.ComponentSchema {
  collectionName: 'components_zawod_zawods';
  info: {
    displayName: 'Zaw\u00F3d';
    icon: 'brush';
  };
  attributes: {
    nazwa_zawodu: Schema.Attribute.String & Schema.Attribute.Required;
    opis_zawodu: Schema.Attribute.Text & Schema.Attribute.Required;
    zdjecie_zawodu: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bdfh.hju': BdfhHju;
      'cechy-ludzkie-dla-kierunku.cechy-ludzkie-dla-kierunku': CechyLudzkieDlaKierunkuCechyLudzkieDlaKierunku;
      'kierunek.kierunek': KierunekKierunek;
      'kwalifikacja.kwalifikacja': KwalifikacjaKwalifikacja;
      'lista-kierunkow.lista-kierunkow': ListaKierunkowListaKierunkow;
      'lista-kwalifikacji.lista-kwalifikacji': ListaKwalifikacjiListaKwalifikacji;
      'lista-zawodow.lista-zawodow': ListaZawodowListaZawodow;
      'lokalizacja.lokalizacja': LokalizacjaLokalizacja;
      'mozliwosci-rozwoju.mozliwosci-rozwoju': MozliwosciRozwojuMozliwosciRozwoju;
      'praca.praca': PracaPraca;
      'rodzaje-szkoly.rodzaje-szkoly': RodzajeSzkolyRodzajeSzkoly;
      'szkola.szkola': SzkolaSzkola;
      'typ-szkoly.typ-szkoly': TypSzkolyTypSzkoly;
      'umiejetnosci.umiejetnosci': UmiejetnosciUmiejetnosci;
      'warunki-pracy.warunki-pracy': WarunkiPracyWarunkiPracy;
      'zawod.zawod': ZawodZawod;
    }
  }
}
