import { Component, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMCharts4';
  
  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(()=>{
      /**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
//chart.legend = new am4charts.Legend();
//chart.openModal("Testing Modal");
//am4core.options.deferredDelay = 0;

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

networkSeries.data = [{
  name: 'Flora',
  fixed: true,
  children: [{
    name: 'Black Tea', value: 1
  }, {
    name: 'Floral',
    children: [{
      name: 'Chamomile', value: 1
    }, {
      name: 'Rose', value: 1
    }, {
      name: 'Jasmine', value: 1
    }]
  }]
}, {
  name: 'Fruity',
  fixed: true,
  children: [{
    name: 'Berry',
    children: [{
      name: 'Blackberry', value: 1
    }, {
      name: 'Raspberry', value: 1
    }, {
      name: 'Blueberry', value: 1
    }, {
      name: 'Strawberry', value: 1
    }]
  }, {
    name: 'Dried Fruit',
    children: [{
      name: 'Raisin', value: 1
    }, {
      name: 'Prune', value: 1
    }]
  }, {
    name: 'Other Fruit',
    children: [{
      name: 'Coconut', value: 1
    }, {
      name: 'Cherry', value: 1
    }, {
      name: 'Pomegranate', value: 1
    }, {
      name: 'Pineapple', value: 1
    }, {
      name: 'Grape', value: 1
    }, {
      name: 'Apple', value: 1
    }, {
      name: 'Peach', value: 1
    }, {
      name: 'Pear', value: 1
    }]
  }, {
    name: 'Citrus Fruit',
    children: [{
      name: 'Grapefruit', value: 1
    }, {
      name: 'Orange', value: 1
    }, {
      name: 'Lemon', value: 1
    }, {
      name: 'Lime', value: 1
    }]
  }]
}, {
  name: 'Sour/Fermented',
  fixed: true,
  children: [{
    name: 'Sour',
    children: [{
      name: 'Sour Aromatics', value: 1
    }, {
      name: 'Acetic Acid', value: 1
    }, {
      name: 'Butyric Acid', value: 1
    }, {
      name: 'Isovaleric Acid', value: 1
    }, {
      name: 'Citric Acid', value: 1
    }, {
      name: 'Malic Acid', value: 1
    }]
  }, {
    name: 'Alcohol/Fremented',
    children: [{
      name: 'Winey', value: 1
    }, {
      name: 'Whiskey', value: 1
    }, {
      name: 'Fremented', value: 1
    }, {
      name: 'Overripe', value: 1
    }]
  }]
}, {
  name: 'Green/Vegetative',
  fixed: true,
  children: [{
    name: 'Olive Oil', value: 1
  }, {
    name: 'Raw', value: 1
  }, {
    name: 'Green/Vegetative',
    children: [{
      name: 'Under-ripe', value: 1
    }, {
      name: 'Peapod', value: 1
    }, {
      name: 'Fresh', value: 1
    }, {
      name: 'Dark Green', value: 1
    }, {
      name: 'Vegetative', value: 1
    }, {
      name: 'Hay-like', value: 1
    }, {
      name: 'Herb-like', value: 1
    }]
  }, {
    name: 'Beany', value: 1
  }]
}, {
  name: 'Other',
  fixed: true,
  children: [{
    name: 'Papery/Musty',
    children: [{
      name: 'Stale', value: 1
    }, {
      name: 'Cardboard', value: 1
    }, {
      name: 'Papery', value: 1
    }, {
      name: 'Woody', value: 1
    }, {
      name: 'Moldy/Damp', value: 1
    }, {
      name: 'Musty/Dusty', value: 1
    }, {
      name: 'Musty/Earthy', value: 1
    }, {
      name: 'Animalic', value: 1
    }, {
      name: 'Meaty Brothy', value: 1
    }, {
      name: 'Phenolic', value: 1
    }]
  }, {
    name: 'Chemical',
    children: [{
      name: 'Bitter', value: 1
    }, {
      name: 'Salty', value: 1
    }, {
      name: 'Medicinal', value: 1
    }, {
      name: 'Petroleum', value: 1
    }, {
      name: 'Skunky', value: 1
    }, {
      name: 'Rubber', value: 1
    }]
  }]
}, {
  name: 'Roasted',
  fixed: true,
  children: [{
    name: 'Pipe Tobacco', value: 1
  }, {
    name: 'Tobacco', value: 1
  }, {
    name: 'Burnt',
    children: [{
      name: 'Acrid', value: 1
    }, {
      name: 'Ashy', value: 1
    }, {
      name: 'Smoky', value: 1
    }, {
      name: 'Brown, Roast', value: 1
    }]
  }, {
    name: 'Cereal',
    children: [{
      name: 'Grain', value: 1
    }, {
      name: 'Malt', value: 1
    }]
  }]
}, {
  name: 'Spices',
  fixed: true,
  children: [{
    name: 'Pungent', value: 1
  }, {
    name: 'Pepper', value: 1
  }, {
    name: 'Brown Spice',
    children: [{
      name: 'Anise', value: 1
    }, {
      name: 'Nutmeg', value: 1
    }, {
      name: 'Cinnamon', value: 1
    }, {
      name: 'Clove', value: 1
    }]
  }]
}, {
  name: 'Nutty/Cocoa',
  fixed: true,
  children: [{
    name: 'Nutty',
    children: [{
      name: 'Peanuts', value: 1
    }, {
      name: 'Hazelnut', value: 1
    }, {
      name: 'Almond', value: 1
    }]
  }, {
    name: 'Cocoa',
    children: [{
      name: 'Chocolate', value: 1
    }, {
      name: 'Dark Chocolate', value: 1
    }]
  }]
}, {
  name: 'Sweet',
  fixed: true,
  children: [{
    name: 'Brown Sugar',
    children: [{
      name: 'Molasses', value: 1
    }, {
      name: 'Maple Syrup', value: 1
    }, {
      name: 'Caramelized', value: 1
    }, {
      name: 'Honey', value: 1
    }]
  }, {
    name: 'Vanilla', value: 1
  }, {
    name: 'Vanillin', value: 1
  }, {
    name: 'Overall Sweet', value: 1
  }, {
    name: 'Sweet Aromatics', value: 1
  }]
}];

networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";
networkSeries.dataFields.fixed = "fixed";


networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 8;
networkSeries.maxRadius = am4core.percent(6);
networkSeries.manyBodyStrength = -16;
networkSeries.nodes.template.label.hideOversized = true;
networkSeries.nodes.template.label.truncate = true;
networkSeries.nodes.template.draggable = false;

networkSeries.manyBodyStrength = -100;
networkSeries.links.template.distance = 1;
networkSeries.links.template.strength = 2;

// Start collapsed
networkSeries.maxLevels = 1;
networkSeries.dataItem.fixed = true;

// Expand single level only
networkSeries.nodes.template.expandAll = false;

/*// Close other nodes when one is opened
networkSeries.nodes.template.events.on("hit", function(ev) {
  var targetNode = ev.target;
  if (targetNode.isActive) {
    networkSeries.nodes.each(function(node) {
      if (targetNode !== node && node.isActive && targetNode.dataItem.level == node.dataItem.level) {
        node.isActive = false;
        node.hide();
      }
    });
  }
});*/

//zoom
//chart.zoomable = true;
networkSeries.nodes.template.events.on("hit", function(event) {
  if (event.target.isActive) {
    chart.zoomToDataItem(event.target.dataItem, 1, true)
  }
  else {
    if (event.target.dataItem.level === 0) {
      chart.zoomOut();
    }
  }
});

var hoverState = networkSeries.links.template.states.create("hover");
hoverState.properties.strokeWidth = 3;
hoverState.properties.strokeOpacity = 1;

networkSeries.nodes.template.events.on("over", function(event) {
  event.target.dataItem.childLinks.each(function(link) {
    link.isHover = true;
  })
  if (event.target.dataItem.parentLink) {
    event.target.dataItem.parentLink.isHover = true;
  }

})

networkSeries.nodes.template.events.on("out", function(event) {
  event.target.dataItem.childLinks.each(function(link) {
    link.isHover = false;
  })
  if (event.target.dataItem.parentLink) {
    event.target.dataItem.parentLink.isHover = false;
  }
})

// Close other nodes when one is opened
networkSeries.nodes.template.events.on("hit", function(ev) {
  var targetNode = ev.target;
  if (targetNode.isActive) {
    networkSeries.nodes.each(function(node) {
      if ((targetNode !== node) && (targetNode.dataItem.level == node.dataItem.level)) {
        node.isActive = false;
        node.interactionsEnabled = false;
        node.hide();
      }
    });
  }
  if (targetNode.isActive===false) {
    networkSeries.nodes.each(function(node) {
      if ((node === targetNode.parent) || ((targetNode.dataItem.level === node.dataItem.level) && (targetNode.dataItem.level === 0))) {
        node.interactionsEnabled = true;
        node.show();
      }
    });
  }
});
    })
  }


}
