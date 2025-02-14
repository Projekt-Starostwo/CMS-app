import type { Schema, Struct } from '@strapi/strapi';

export interface BdfhHju extends Struct.ComponentSchema {
  collectionName: 'components_bdfh_hjus';
  info: {
    displayName: 'hju';
  };
  attributes: {};
}

export interface KierunekKierunek extends Struct.ComponentSchema {
  collectionName: 'components_kierunek_kieruneks';
  info: {
    description: '';
    displayName: 'kierunek';
    icon: 'book';
  };
  attributes: {
    galeria: Schema.Attribute.Media<'images' | 'videos', true>;
    glowne_zdjecie: Schema.Attribute.Media<'images'>;
    lista_kwalifikacji: Schema.Attribute.Component<
      'lista-kwalifikacji.lista-kwalifikacji',
      true
    >;
    lista_zawodow: Schema.Attribute.Component<
      'lista-zawodow.lista-zawodow',
      true
    >;
    nazwa_kierunku: Schema.Attribute.String & Schema.Attribute.Required;
    opis_kierunku: Schema.Attribute.Text & Schema.Attribute.Required;
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
    opis: Schema.Attribute.Text;
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
      'kierunek.kierunek': KierunekKierunek;
      'kwalifikacja.kwalifikacja': KwalifikacjaKwalifikacja;
      'lista-kierunkow.lista-kierunkow': ListaKierunkowListaKierunkow;
      'lista-kwalifikacji.lista-kwalifikacji': ListaKwalifikacjiListaKwalifikacji;
      'lista-zawodow.lista-zawodow': ListaZawodowListaZawodow;
      'lokalizacja.lokalizacja': LokalizacjaLokalizacja;
      'rodzaje-szkoly.rodzaje-szkoly': RodzajeSzkolyRodzajeSzkoly;
      'szkola.szkola': SzkolaSzkola;
      'typ-szkoly.typ-szkoly': TypSzkolyTypSzkoly;
      'zawod.zawod': ZawodZawod;
    }
  }
}
