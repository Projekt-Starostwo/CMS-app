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
    nazwa_kierunku: Schema.Attribute.String & Schema.Attribute.Required;
    opis_kierunku: Schema.Attribute.Text & Schema.Attribute.Required;
    typ_kierunku: Schema.Attribute.Enumeration<
      ['liceum', 'technikum', 'szkola_zawodowa']
    > &
      Schema.Attribute.Required;
    zdjecie: Schema.Attribute.Media<'videos' | 'images', true>;
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
    kierunek: Schema.Attribute.Component<'kierunek.kierunek', false>;
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
    opis: Schema.Attribute.Text;
    zdjecia_rodzaju: Schema.Attribute.Media<'images' | 'videos', true>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bdfh.hju': BdfhHju;
      'kierunek.kierunek': KierunekKierunek;
      'lista-kierunkow.lista-kierunkow': ListaKierunkowListaKierunkow;
      'lokalizacja.lokalizacja': LokalizacjaLokalizacja;
      'rodzaje-szkoly.rodzaje-szkoly': RodzajeSzkolyRodzajeSzkoly;
      'szkola.szkola': SzkolaSzkola;
      'typ-szkoly.typ-szkoly': TypSzkolyTypSzkoly;
    }
  }
}
