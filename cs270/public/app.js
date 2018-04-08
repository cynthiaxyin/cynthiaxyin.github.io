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
	{"title":"Diversity","topContent":"Browse by issue","bottomContent":null,"subCollection":[
		{"title":"Diversity Black Community Services Center","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Black Community Services Center","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Jan Barker Alexander (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Dean of Students and Director</div><div class=\"category-strip\">jbarker@stanford.edu</div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Diversity Diversity and First-Gen","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Diversity and First-Gen","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Dereca Blackmon (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean and Director</div><div class=\"category-strip\">dereca@stanford.edu</div><div class=\"category-strip\"><a href=\"https://diversityandfirstgen.stanford.edu/who-we-are\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Adriena Brown", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Director of First-Generation and Low Income Programs</div><div class=\"category-strip\">adriena@stanford.edu</div><div class=\"category-strip\"><a href=\"https://diversityandfirstgen.stanford.edu/who-we-are\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Jennifer Rolen", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Dean & Associate Director</div><div class=\"category-strip\">jrolen@stanford.edu</div><div class=\"category-strip\"><a href=\"https://diversityandfirstgen.stanford.edu/who-we-are\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Joseph Brown", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Director</div><div class=\"category-strip\">jlbrown@stanford.edu</div><div class=\"category-strip\"><a href=\"https://diversityandfirstgen.stanford.edu/who-we-are\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Diversity Asian American Community","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Asian American Activities Center","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Cindy Ng (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean of Students and Director of the Asian American Activities Center</div><div class=\"category-strip\">cindy.ng@stanford.edu</div><div class=\"category-strip\"><a href=\"https://a3c.stanford.edu/about/staff\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Jerald Adamos", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">https://a3c.stanford.edu/about/staff</div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Diversity Chicano and Latino Community","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"El Centro Chicano y Latino","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Frances Morales (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean of Students and Director of El Centro Chicano y Latino</div><div class=\"category-strip\">fmorales@stanford.edu</div><div class=\"category-strip\"><a href=\"https://elcentro.stanford.edu/about/professional-staff\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Elvira Prieto", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Dean of Students and Associate Director of El Centro Chicano y Latino</div><div class=\"category-strip\">vira@stanford.edu</div><div class=\"category-strip\"><a href=\"https://elcentro.stanford.edu/about/professional-staff\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Diversity LGBT  Community","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Queer Student Resources","topContent":null,"bottomContent":null, "subCollection":[
				]},
			]},
		]},
		{"title":"Diversity Muslim Community","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Markaz Resource Center","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Anita Husen (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">husen@stanford.edu</div><div class=\"category-strip\"><a href=\"Associate Dean and Director\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Cassie Garcia", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Program Associate</div><div class=\"category-strip\">CSGARCIA@STANFORD.EDU</div><div class=\"category-strip\"><a href=\"https://markaz.stanford.edu/who-we-are/people/cassie-garcia\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Diversity Native American Community","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Native American Cultural Center","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Denni Dianne Woodward", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Dean and Associate Director</div><div class=\"category-strip\">denni@stanford.edu</div><div class=\"category-strip\"><a href=\"https://nacc.stanford.edu/about-nacc/professional-staff\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Greg Graves", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Dean and Associate Director</div><div class=\"category-strip\">ggraves@stanford.edu</div><div class=\"category-strip\"><a href=\"https://nacc.stanford.edu/about-nacc/professional-staff\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Diversity Womens Community","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Womens Community Center","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Faith Kazmi (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean/Director</div><div class=\"category-strip\">faithk@stanford.edu</div><div class=\"category-strip\"><a href=\"https://wcc.stanford.edu/who-we-are\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
	]},
	{"title":"Drugs and Alcohol","topContent":"Browse by issue","bottomContent":null,"subCollection":[
		{"title":"Drugs and Alcohol Drugs and Alcohol","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Alcohol Policy and Education","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Ralph Castro (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean of Students & Director</div><div class=\"category-strip\">rjcastro@stanford.edu</div></div>","bottomContent":null},
					{"title":"Natalie Thomas", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Dean of Students & Education and Outreach Manager</div><div class=\"category-strip\">thomasnc@stanford.edu</div></div>","bottomContent":null},
					{"title":"Trista Shideler", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Director & Community Engagement Coordinator</div><div class=\"category-strip\">tshidele@stanford.edu</div></div>","bottomContent":null},
				]},
			]},
		]},
	]},
	{"title":"Education","topContent":"Browse by issue","bottomContent":null,"subCollection":[
		{"title":"Education Undergraduate Education","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Vice Provost of Undergraduate Education","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Harry Elam", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Vice Provost for Education, Vice President for the Arts, Freeman-Thornton Vice Provost for Undergraduate Education, Olive H. Palmer Professor in the Humanities</div><div class=\"category-strip\"><a href=\"https://undergrad.stanford.edu/about/meet-vice-provost\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Sarah Church", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Vice Provost</div><div class=\"category-strip\">schurch@stanford.edu</div><div class=\"category-strip\"><a href=\"https://undergrad.stanford.edu/about/contact-us/vpue-program-offices\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Sharon Palmer", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Vice Provost</div><div class=\"category-strip\">sharon.palmer@stanford.edu</div><div class=\"category-strip\"><a href=\"https://undergrad.stanford.edu/about/contact-us/vpue-program-offices\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
	]},
	{"title":"Housing and Dining","topContent":"Browse by issue","bottomContent":null,"subCollection":[
		{"title":"Housing and Dining Dining","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Residential and Dining Enterprises","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Shirley Everett (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Vice Provost</div><div class=\"category-strip\">ssje@stanford.edu</div><div class=\"category-strip\"><a href=\"https://rde.stanford.edu/leadership\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Housing and Dining Housing","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Residential and Dining Enterprises","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Shirley Everett (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Vice Provost</div><div class=\"category-strip\">ssje@stanford.edu</div><div class=\"category-strip\"><a href=\"https://rde.stanford.edu/leadership\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
	]},
	{"title":"Mental Health","topContent":"Browse by issue","bottomContent":null,"subCollection":[
		{"title":"Mental Health Awareness","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Residential Education","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Deborah Golder (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Vice Provost and Dean of Residential Education</div><div class=\"category-strip\">dgolder@stanford.edu</div><div class=\"category-strip\"><a href=\"https://studentaffairs.stanford.edu/who-we-are/residential-education\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Lisa De La Cruz Caldera", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Lead Residence Dean</div><div class=\"category-strip\">lisadlc@stanford.edu</div><div class=\"category-strip\"><a href=\"https://resed.stanford.edu/people/lisa-de-la-cruz-caldera\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group ASSU Senate","topContent":"<div class=\"category-strip\"><a href=\"https://associatedstudents.stanford.edu/undergraduate-senate\">website</a></div>","bottomContent":null},
				{"title":"Group Stanford Mental Health Outreach","topContent":"<div class=\"category-strip\"><a href=\"http://smho.stanford.edu\">website</a></div>","bottomContent":null},
				{"title":"Group The Bridge Peer Counseling Center","topContent":"<div class=\"category-strip\"><a href=\"http://thebridge.stanford.edu\">website</a></div>","bottomContent":null},
				{"title":"Group We Continue","topContent":"<div class=\"category-strip\"><a href=\"http://www.wecontinue.org\">website</a></div>","bottomContent":null},
				{"title":"Group Stanford+Mental Health","topContent":"<div class=\"category-strip\"><a href=\"https://orgsync.com/139262/chapter\">website</a></div>","bottomContent":null},
			]},
		]},
		{"title":"Mental Health Crisis Management","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Dean of Students","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Chris Griffith (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Vice Provost and Dean of Students</div><div class=\"category-strip\">griffith@stanford.edu</div><div class=\"category-strip\"><a href=\"https://studentaffairs.stanford.edu/who-we-are/dean-students\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Alejandro Martinez", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean of Students</div><div class=\"category-strip\">A.Martinez@stanford.edu</div></div>","bottomContent":null},
				]},
				{"title":"Residential Education","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Deborah Golder (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Vice Provost and Dean of Residential Education</div><div class=\"category-strip\">dgolder@stanford.edu</div><div class=\"category-strip\"><a href=\"https://studentaffairs.stanford.edu/who-we-are/residential-education\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Lisa De La Cruz Caldera", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Lead Residence Dean</div><div class=\"category-strip\">lisadlc@stanford.edu</div><div class=\"category-strip\"><a href=\"https://resed.stanford.edu/people/lisa-de-la-cruz-caldera\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Mental Health Suicide Prevention","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group We Continue","topContent":"<div class=\"category-strip\"><a href=\"http://www.wecontinue.org\">website</a></div>","bottomContent":null},
			]},
		]},
		{"title":"Mental Health Treatment","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Counseling and Psychological Services","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Ronald Albucher", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Staff Psychiatrist</div><div class=\"category-strip\">albucher@stanford.edu</div><div class=\"category-strip\"><a href=\"https://vaden.stanford.edu/people/ronald-c-albucher-md\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Vaden","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"James Jacobs (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Executive Director of Vaden Health Center; Associate Vice Provost for Student Affairs</div><div class=\"category-strip\">jamesrj@stanford.edu</div><div class=\"category-strip\"><a href=\"https://vaden.stanford.edu/people/james-r-jacobs-md-phd\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Carole Pertofsky", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Director of Wellness and Health Promotion Services</div><div class=\"category-strip\">perto@stanford.edu</div><div class=\"category-strip\"><a href=\"https://vaden.stanford.edu/people/carole-pertofsky-med\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Weiland Health Initiative","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Inge Hansen", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Director for Outreach / Director, Weiland Health Initiative</div><div class=\"category-strip\">ihansen@stanford.edu</div><div class=\"category-strip\"><a href=\"https://vaden.stanford.edu/people/inge-hansen-psyd\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group The Bridge Peer Counseling Center","topContent":"<div class=\"category-strip\"><a href=\"http://thebridge.stanford.edu\">website</a></div>","bottomContent":null},
			]},
		]},
		{"title":"Mental Health Wellness","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Vaden","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"James Jacobs (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Executive Director of Vaden Health Center; Associate Vice Provost for Student Affairs</div><div class=\"category-strip\">jamesrj@stanford.edu</div><div class=\"category-strip\"><a href=\"https://vaden.stanford.edu/people/james-r-jacobs-md-phd\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Carole Pertofsky", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Director of Wellness and Health Promotion Services</div><div class=\"category-strip\">perto@stanford.edu</div><div class=\"category-strip\"><a href=\"https://vaden.stanford.edu/people/carole-pertofsky-med\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Weiland Health Initiative","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Inge Hansen", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Assistant Director for Outreach / Director, Weiland Health Initiative</div><div class=\"category-strip\">ihansen@stanford.edu</div><div class=\"category-strip\"><a href=\"https://vaden.stanford.edu/people/inge-hansen-psyd\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Office of Religious Life","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Jane Shaw (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Dean for Religious Life and Professor of Religious Studies</div><div class=\"category-strip\">janeshaw@stanford.edu</div><div class=\"category-strip\"><a href=\"https://religiouslife.stanford.edu/people/rev-professor-jane-shaw\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Joanne Sanders", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean for Religious Life</div><div class=\"category-strip\">joanne.sanders@stanford.edu</div><div class=\"category-strip\"><a href=\"https://religiouslife.stanford.edu/people/rev-joanne-sanders\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Patricia Karlin-Neumann", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Dean for Religious Life</div><div class=\"category-strip\">rabbipkn@stanford.edu</div><div class=\"category-strip\"><a href=\"https://religiouslife.stanford.edu/people/rabbi-patricia-karlin-neumann\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Sughra Ahmed", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean for Religious Life</div><div class=\"category-strip\">sughra@stanford.edu</div><div class=\"category-strip\"><a href=\"https://religiouslife.stanford.edu/people/sughra-ahmed\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group The Bridge Peer Counseling Center","topContent":"<div class=\"category-strip\"><a href=\"http://thebridge.stanford.edu\">website</a></div>","bottomContent":null},
				{"title":"Group The Stanford Happiness Collective","topContent":"<div class=\"category-strip\"><a href=\"https://orgsync.com/50652/chapter\">website</a></div>","bottomContent":null},
			]},
		]},
	]},
	{"title":"Sexual Violence","topContent":"Browse by issue","bottomContent":null,"subCollection":[
		{"title":"Sexual Violence Advocacy","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Groups","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Group ASSU Exec","topContent":"<div class=\"category-strip\"><a href=\"https://associatedstudents.stanford.edu/executive-landing\">website</a></div>","bottomContent":null},
				{"title":"Group Stanford Association of Students for Sexual Assault Prevention","topContent":"<div class=\"category-strip\"><a href=\"https://orgsync.com/129622/chapter\">website</a></div>","bottomContent":null},
			]},
		]},
		{"title":"Sexual Violence Campus Climate Survey","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Office of Equity and Access","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Lauren Schoenthaler (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Vice Provost for Institutional Equity and Access</div><div class=\"category-strip\">lks@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/lauren-knudsen-schoenthaler\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Campus Climate Survey Committee","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Auguste Seong","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">wgseong@stanford.edu</div></div>","bottomContent":null},
					{"title":"Brian Cook","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Director of Assessment and Program Evaluation</div><div class=\"category-strip\">bcook@stanford.edu</div></div>","bottomContent":null},
					{"title":"Clea Sarnquist","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">cleas@stanford.edu</div></div>","bottomContent":null},
					{"title":"Corrie Potter","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Vice Provost and Director</div><div class=\"category-strip\">cjpotter@stanford.edu</div></div>","bottomContent":null},
					{"title":"Jeremy Freese","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">jfreese@stanford.edu</div></div>","bottomContent":null},
					{"title":"Lauren Schoenthaler","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Vice Provost for Institutional Equity and Access</div><div class=\"category-strip\">lks@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/lauren-knudsen-schoenthaler\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Michael Baiocchi","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">baiocchi@stanford.edu</div></div>","bottomContent":null},
					{"title":"Rachel Green","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">regreen@stanford.edu</div></div>","bottomContent":null},
					{"title":"Sheri Sheppard","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">sheppard@stanford.edu</div></div>","bottomContent":null},
					{"title":"Stephanie Kalfayan","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Vice Provost for Academic Affairs</div><div class=\"category-strip\">kalfayan@stanford.edu</div></div>","bottomContent":null},
					{"title":"Susan McConnell","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">suemcc@stanford.edu</div></div>","bottomContent":null},
					{"title":"Susie Brubaker-Cole","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Vice Provost for Student Affairs</div><div class=\"category-strip\">susiebc@stanford.edu</div><div class=\"category-strip\"><a href=\"https://studentaffairs.stanford.edu/who-we-are/vice-provost-student-affairs\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Sexual Violence Education and Prevention","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Sexual and Relationship Abuse","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Carley Flanery (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Director of Office of Sexual Assualt and Relationship Abuse Education & Response</div><div class=\"category-strip\">cflanery@stanford.edu</div><div class=\"category-strip\"><a href=\"https://sara.stanford.edu/about-sara/our-team-2\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Brianna Booth", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Director of Positive Sexuality, Design & Development</div><div class=\"category-strip\">boothbk@stanford.edu</div><div class=\"category-strip\"><a href=\"https://sara.stanford.edu/about-sara/our-team-2\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Grace Poon", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Coordinator of Prevention Education and Training</div><div class=\"category-strip\">gpoon1@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/grace-poon\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Office of Equity and Access","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Lauren Schoenthaler (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Vice Provost for Institutional Equity and Access</div><div class=\"category-strip\">lks@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/lauren-knudsen-schoenthaler\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Sexual Assault and Relationship Abuse Advisory Board","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Allison Tielking","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">atielking@stanford.edu</div></div>","bottomContent":null},
					{"title":"Erin Neumann","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">eneumann@stanford.edu</div></div>","bottomContent":null},
					{"title":"Gia Colgan","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">gcolgan@stanford.edu</div></div>","bottomContent":null},
					{"title":"Katherine Carey","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">krcarey@stanford.edu</div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Sexual Violence Survivor Resources","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Confidential Support Team","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Helen Wilson (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Director, Confidential Support Team</div><div class=\"category-strip\">hwilson3@stanford.edu</div><div class=\"category-strip\"><a href=\"https://vaden.stanford.edu/people/helen-w-wilson-phd\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Sexual and Relationship Abuse","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Carley Flanery (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Director of Office of Sexual Assualt and Relationship Abuse Education & Response</div><div class=\"category-strip\">cflanery@stanford.edu</div><div class=\"category-strip\"><a href=\"https://sara.stanford.edu/about-sara/our-team-2\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Brianna Booth", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Director of Positive Sexuality, Design & Development</div><div class=\"category-strip\">boothbk@stanford.edu</div><div class=\"category-strip\"><a href=\"https://sara.stanford.edu/about-sara/our-team-2\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Grace Poon", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Coordinator of Prevention Education and Training</div><div class=\"category-strip\">gpoon1@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/grace-poon\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Title IX","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Catherine Glaze (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Title IX Coordinator</div><div class=\"category-strip\">cglaze@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/catherine-glaze\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Miranda Tuttle", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Outreach and Student Resources Manager</div><div class=\"category-strip\">mtuttle@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/miranda-tuttle\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Office of Equity and Access","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Lauren Schoenthaler (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Vice Provost for Institutional Equity and Access</div><div class=\"category-strip\">lks@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/lauren-knudsen-schoenthaler\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Office of Religious Life","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Jane Shaw (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Dean for Religious Life and Professor of Religious Studies</div><div class=\"category-strip\">janeshaw@stanford.edu</div><div class=\"category-strip\"><a href=\"https://religiouslife.stanford.edu/people/rev-professor-jane-shaw\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Joanne Sanders", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean for Religious Life</div><div class=\"category-strip\">joanne.sanders@stanford.edu</div><div class=\"category-strip\"><a href=\"https://religiouslife.stanford.edu/people/rev-joanne-sanders\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Patricia Karlin-Neumann", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Dean for Religious Life</div><div class=\"category-strip\">rabbipkn@stanford.edu</div><div class=\"category-strip\"><a href=\"https://religiouslife.stanford.edu/people/rabbi-patricia-karlin-neumann\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Sughra Ahmed", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Associate Dean for Religious Life</div><div class=\"category-strip\">sughra@stanford.edu</div><div class=\"category-strip\"><a href=\"https://religiouslife.stanford.edu/people/sughra-ahmed\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
			{"title":"Committees","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Confidential Support Team Advisory Board","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Cecilia Thomas","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">celyt@stanford.edu</div></div>","bottomContent":null},
					{"title":"Eliana Greenberg","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">elgreenb@stanford.edu</div></div>","bottomContent":null},
					{"title":"Meghan Warner","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">mowarner@stanford.edu</div></div>","bottomContent":null},
					{"title":"Michael Ocon","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">ocon@stanford.edu</div></div>","bottomContent":null},
					{"title":"Quito Tsui","topContent":"<div class=\"detail-box\"><div class=\"category-strip\">qtsui@stanford.edu</div></div>","bottomContent":null},
				]},
			]},
		]},
		{"title":"Sexual Violence Title IX","topContent":null,"bottomContent":null, "subCollection":[
			{"title":"Offices","topContent":null,"bottomContent":null, "subCollection":[
				{"title":"Title IX","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Catherine Glaze (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Title IX Coordinator</div><div class=\"category-strip\">cglaze@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/catherine-glaze\" target=\"_blank\">website</a></div></div>","bottomContent":null},
					{"title":"Miranda Tuttle", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Outreach and Student Resources Manager</div><div class=\"category-strip\">mtuttle@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/miranda-tuttle\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
				{"title":"Office of Equity and Access","topContent":null,"bottomContent":null, "subCollection":[
					{"title":"Lauren Schoenthaler (Director)", "topContent":"<div class=\"detail-box\"><div class=\"category-strip\">Senior Associate Vice Provost for Institutional Equity and Access</div><div class=\"category-strip\">lks@stanford.edu</div><div class=\"category-strip\"><a href=\"https://equity.stanford.edu/people/lauren-knudsen-schoenthaler\" target=\"_blank\">website</a></div></div>","bottomContent":null},
				]},
			]},
		]},
	]},
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