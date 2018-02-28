'use strict';
var app = angular.module('sirAccordion', [
  'sir-accordion'
  ])

app.run([function() {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
}]);

app.controller('Principal',['$scope','$compile',function($scope,$compile){
  $scope.activeArray = 1;
  $scope.coord = '';
  $scope.accordionConfig = {
    debug: false,
    animDur: 300,
    expandFirst: false,
    autoCollapse: true,
    watchInternalChanges: false,
    headerClass: '',
    beforeHeader: '',
    afterHeader: '<div class="drop-icon-wrapper sir-accordion-vertical-align"><i class="glyphicon glyphicon-chevron-down"></i></div>',
    topContentClass: '',
    beforeTopContent: '',
    afterTopContent: '<div><p><small></small></p></div>', 
    bottomContentClass: '',
    beforeBottomContent: '',
    afterBottomContent: ''
  };

  $scope.accordionArray = 
  [
    /* Mental Health */
    {"title":"Mental Health","topContent":"Browse by issue","bottomContent":null,"subCollection":[
      {"title":"Mental Health Awareness","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Office Residential Education","topContent":null,"bottomContent":null}
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Stanford + Mental Health","topContent":null,"bottomContent":null},
          {"title":"Stanford Mental Health Outreach","topContent":null,"bottomContent":null},
          {"title":"The Bridge Peer Counseling Center","topContent":null,"bottomContent":null},
          {"title":"We Continue","topContent":null,"bottomContent":null}
        ]}
      ]},

      {"title":"Mental Health Crisis Management","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Office Dean of Students","topContent":null,"bottomContent":null},
          {"title":"Office Residential Education","topContent":null,"bottomContent":null}
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
        ]}
      ]},

      {"title":"Mental Health Suicide Prevention","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"We Continue","topContent":null,"bottomContent":null}
        ]}
      ]},

      {"title":"Mental Health Treatment","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Office Counseling and Psychological Services","topContent":null,"bottomContent":null},
          {"title":"Office Vaden","topContent":null,"bottomContent":null},
          {"title":"Office Weiland Health Initiative","topContent":null,"bottomContent":null}
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"The Bridge Peer Counseling Center","topContent":null,"bottomContent":null}
        ]}
      ]},

      {"title":"Mental Health Wellness","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Office of Religious Life","topContent":null,"bottomContent":null},
          {"title":"Office Vaden","topContent":null,"bottomContent":null},
          {"title":"Office Weiland Health Initiative","topContent":null,"bottomContent":null}
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"The Bridge Peer Counseling Center","topContent":null,"bottomContent":null},
          {"title":"The Stanford Happiness Collective","topContent":null,"bottomContent":null}
        ]}
      ]},
    ]},

    
    /* Sexual Violence */
    {"title":"Sexual Violence","topContent":"Browse by issue","bottomContent":null,"subCollection":[
      {"title":"Sexual Violence Advocacy","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"ASSU Exec","topContent":null,"bottomContent":null},
          {"title":"Stanford Association of Students for Sexual Assault Prevention","topContent":null,"bottomContent":null},
        ]}
      ]},

      {"title":"Sexual Violence Campus Climate Survey","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Campus Climate Survey Committee","topContent":null,"bottomContent":null}
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Office of Equity and Access","topContent":null,"bottomContent":null}
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
        ]}
      ]},

      {"title":"Sexual Violence Education and Prevention","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Sexual Assault and Relationship Abuse Advisory Board","topContent":null,"bottomContent":null}
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
        ]}
      ]},

      {"title":"Sexual Violence Survivor Resources","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Confidential Support Team Advisory Board","topContent":null,"bottomContent":null}
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Office Confidential Support Team","topContent":null,"bottomContent":null},
          {"title":"Office of Equity and Access","topContent":null,"bottomContent":null},
          {"title":"Office Sexual and Relationship Abuse","topContent":null,"bottomContent":null}
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
        ]}
      ]},

      {"title":"Sexual Violence Title IX","topContent":null,"bottomContent":null, "subCollection":[
        {"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
        ]},
        {"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
          {"title":"Office of Equity and Access","topContent":null,"bottomContent":null},
          {"title":"Office Title IX","topContent":null,"bottomContent":null}
        ]},
        {"title":"Student Groups","topContent":null,"bottomContent":null, "subCollection":[
        ]}
      ]},
    ]}
  ];

  $scope.toggleAutoCollapse = function(){
    $scope.$broadcast('sacCollapseAll');
    $scope.accordionConfig.autoCollapse = !$scope.accordionConfig.autoCollapse;
  };

  $scope.expandByCoord = function(){
    $scope.$broadcast('sacExpandContentById', $scope.coord);
  }

  $scope.collapseByCoord = function(){
    $scope.$broadcast('sacCollapseContentById', $scope.coord);
  }

  $scope.expandAll = function(){
    $scope.$broadcast('sacExpandAll');
  };

  $scope.collapseAll = function(){
    $scope.$broadcast('sacCollapseAll');
  };

}]);