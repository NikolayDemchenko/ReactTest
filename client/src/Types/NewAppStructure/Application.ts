import React from 'react';

export class Application {
  private siteEditor: SiteEditor = new SiteEditor();
  run() {}
}

export class SiteEditor {
  private navigationPanel: NnavigationPanel = new NnavigationPanel();
  // stylePanel : StylePanelPanel
  showNavigationPanel() {
    this.navigationPanel.showSites();
  }
  // showStylePanel()
}

export class NnavigationPanel {
  private sites: Sites = new Sites();
  showSites() {
    return  React.createElement('div', null, this.sites )
  }
}

export class Sites {
  private collection: Site[];
  constructor() {
    this.collection = this.LoadSites();
  }

  LoadSites(): Site[] {
    const sites: Site[] = [];
    sites.push(new Site("1", "Первый сайт", "firstsite.com", "page_1"));
    return sites;
  }
  showSites() {}
  //   create() {}
  //   find(name: string) {}
  //   delete(site: Site) {}
}

export class Site {
  private _id: string;
  private name: string;
  private domaine: string;
  private startPage_id: string;
  /**
   *
   */
  constructor(
    _id: string,
    name: string,
    domaine: string,
    startPage_id: string
  ) {
    this._id = _id;
    this.name = name;
    this.domaine = domaine;
    this.startPage_id = startPage_id;
  }
  //  pages : Pages
  //   updateName() {}
  //   updateDomaine() {}
  //   updateStartPage_id() {}
  showData(){ 
  return  React.createElement('div', null, [   this._id,
    this.name,
    this.domaine,
    this.startPage_id] )
  }
  render() {}
}

// class  Pages {
//      page : Page
//      pageNames : string[]
//      constructor( site_id : string ){}
//      findPageNamesBySite_id( site_id : string ){};
//      create(){};
//      selectPage(){};
//      find( name : string ){}
//      delete( page : Page ){}
// }
