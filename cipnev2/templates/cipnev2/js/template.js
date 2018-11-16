/* Copyright (C) 2007 - 2010 YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

/* template.js, Copyright (C) 2007 - 2010 YOOtheme GmbH */

var WarpTemplate = {
		
	start: function() {

		/* Accordion menu */
		new Warp.AccordionMenu('div#middle ul.menu li.toggler', 'ul.accordion', { accordion: 'slide' });

		/* Dropdown menu */
		var dropdown = new Warp.Menu('menu', { mode: 'default', dropdownSelector: 'div.dropdown', transition: Fx.Transitions.Expo.easeOut });
		dropdown.matchUlHeight();

		/* set hover color */
		var menuEnter;
		var menuLeave;
		var submenuEnter;
		var submenuLeave;

		switch (Warp.Settings.color) {
			case 'brown':
				var menuEnter = '#8E8578';
				var menuLeave = '#968C7E';
				var submenuEnter = '#39372D';
				var submenuLeave = '#5E574C';
				break;	
			case 'blue':
				var menuEnter = '#BAD2D7';
				var menuLeave = '#C4DDE3';
				var submenuEnter = '#5A8A96';
				var submenuLeave = '#86ACB3';
				break;
			case 'greyblue':
			case 'greyred':
			case 'greygrey':
			case 'greyorange':
				var menuEnter = '#D6DADA';
				var menuLeave = '#E2E6E6';
				var submenuEnter = '#6C7279';
				var submenuLeave = '#9DA0AA';
				break;
			case 'khakiblue':
			case 'khakigreen':
			case 'khakired':
			case 'khakiorange':
				var menuEnter = '#B4B2A5';
				var menuLeave = '#BEBCAE';
				var submenuEnter = '#595746';
				var submenuLeave = '#857F6C';
				break;
			case 'beigeblue':
			case 'beigegreen':
			case 'beigered':
			default:
				var menuEnter = '#dfded5';
				var menuLeave = '#E9E8DF';
				var submenuEnter = '#797971';
				var submenuLeave = '#A9A59F';
		}

		/* Morph: main menu - level2 (bg) */
		var menuEnter = { 'background-color': menuEnter };
		var menuLeave = { 'background-color': menuLeave };

		new Warp.Morph('#menu a.level2', menuEnter, menuLeave,
			{ transition: Fx.Transitions.linear, duration: 0 },
			{ transition: Fx.Transitions.sineIn, duration: 600 });

		/* Morph: mod-headline sub menu - level1 (bg) */
		var submenuEnter = { 'color': submenuEnter };
		var submenuLeave = { 'color': submenuLeave };

		new Warp.Morph('div.mod-headline ul.menu span.bg', submenuEnter, submenuLeave,
			{ transition: Fx.Transitions.linear, duration: 0, ignore: 'div.mod-headline ul.menu a.current span.bg' },
			{ transition: Fx.Transitions.sineIn, duration: 200 });

		/* Smoothscroll */
		new SmoothScroll({ duration: 500, transition: Fx.Transitions.Expo.easeOut });

		/* Match height of div tags */
		Warp.Base.matchHeight('div.headerbox div.deepest', 20);
		Warp.Base.matchHeight('div.topbox div.deepest', 20);
		Warp.Base.matchHeight('div.bottombox div.deepest', 20);
		Warp.Base.matchHeight('div.maintopbox div.deepest', 20);
		Warp.Base.matchHeight('div.mainbottombox div.deepest', 20);
		Warp.Base.matchHeight('div.contenttopbox div.deepest', 20);
		Warp.Base.matchHeight('div.contentbottombox div.deepest', 20);

	}

};

/* Add functions on window load */
window.addEvent('domready', WarpTemplate.start);