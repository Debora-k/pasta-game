
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		const textStyle = {"fontFamily": "PixelifySans-Regular", "fontSize": "23px", "color":"black", "align": "left", wordWrap:{width:220, useAdvancedWrap:true}};
		


		const level_bg = this.add.image(640, 360, "level_bg");
		level_bg.setScale(0.5, 0.5);
		level_bg.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);


		const napkin = this.add.image(125, 650, "napkin");
		napkin.setScale(0.2, 0.2);

		const tissues = this.add.image(570, 100, "tissues");
		tissues.setScale(0.1, 0.1);
		
		const chopping_board = this.add.image(700, 450, "chopping_board");
		chopping_board.setScale(0.24, 0.24);

		const clipboard = this.add.image(1090, 430, "clipboard");
		clipboard.setScale(0.25, 0.25);


		const clipboard_list1 = this.add.text(1000, 330, "Add 100g flour", {});
		clipboard_list1.setOrigin(0, 0.5);
		clipboard_list1.setStyle(textStyle);


		const clipboard_list2 = this.add.text(1000, 380, "Crack 2 eggs", {});
		clipboard_list2.setOrigin(0, 0.5);
		clipboard_list2.setStyle(textStyle);


		const clipboard_list3 = this.add.text(1000, 430, "Whisk the eggs", {});
		clipboard_list3.setOrigin(0, 0.5);
		clipboard_list3.setStyle(textStyle);

		
		const clipboard_list4 = this.add.text(1000, 480, "Knead the dough", {});
		clipboard_list4.setOrigin(0, 0.5);
		clipboard_list4.setStyle(textStyle);
		
		
		const clipboard_list5 = this.add.text(1000, 530, "Rest the dough for 30 min", {});
		clipboard_list5.setOrigin(0, 0.5);
		clipboard_list5.setStyle(textStyle);


		const clipboard_list6 = this.add.text(1000, 580, "Cut the dough", {});
		clipboard_list6.setOrigin(0, 0.5);
		clipboard_list6.setStyle(textStyle);


		const rect1 = this.add.rectangle(985, 330, 20, 20, 0x808080, 1);
		
		let flour = this.add.image(720, 450, "flour");
		flour.setScale(0.8, 0.8);
		flour.setVisible(false);
		const flour_jar = this.add.image(165, 410, "flour_jar");
		flour_jar.setScale(0.12, 0.12);
		let clickCnt = 0;
		flour_jar.setInteractive().on('pointerdown', () => {
			clickCnt++;
			flour.setVisible(true);
			if(clickCnt === 1) {
				rect1.setFillStyle(0x00ff00);
			}
		});

		const flour_egg_1 = this.add.image(720, 450, "flour_egg_1");
		flour_egg_1.setScale(0.8, 0.8);
		flour_egg_1.setVisible(false);
		
		const flour_egg_2 = this.add.image(720, 450, "flour_egg_2");
		flour_egg_2.setScale(0.8, 0.8);
		flour_egg_2.setVisible(false);

		const rect2 = this.add.rectangle(985, 380, 20, 20, 0x808080, 1);

		const egg_outline = this.add.image(746, 450, "egg_outline");
		egg_outline.setScale(0.04, 0.04);
		egg_outline.setVisible(false);
		const eggs_1 = this.add.image(150, 150, "eggs_1");
		eggs_1.setScale(0.13, 0.13);
		let eggs_clickedCnt = 0;
		eggs_1.setInteractive().on('pointerdown', () => {
			eggs_clickedCnt++;
			clickCnt++;
			//userClickCount++;
			flour.setVisible(false);
			flour_egg_1.setVisible(true);
			if(eggs_clickedCnt === 1 && clickCnt === 2) {
				egg_outline.setVisible(true);
			};
			if (eggs_clickedCnt === 2 && clickCnt === 3) {
				rect2.setFillStyle(0x00ff00);
				flour_egg_1.setVisible(false);
				egg_outline.setVisible(false);
				flour_egg_2.setVisible(true);
			}
		});

		const olive_oil = this.add.image(380, 100, "olive_oil");
		olive_oil.setScale(0.08, 0.08);
		olive_oil.setInteractive().on('pointerup', () => {});


		const semolina_flour_jar = this.add.image(390, 280, "semolina_flour_jar");
		semolina_flour_jar.setScale(0.09, 0.09);
		semolina_flour_jar.setInteractive().on('pointerup', () => {});


		const tomatoes = this.add.image(115, 615, "tomatoes");
		tomatoes.setScale(0.095, 0.095);
		tomatoes.setInteractive().on('pointerup', () => {});

		const basil = this.add.image(315, 630, "basil");
		basil.setScale(0.1, 0.1);
		basil.setInteractive().on('pointerup', () => {});

		const rect3 = this.add.rectangle(985, 430, 20, 20, 0x808080, 1);
		const whisked_eggs = this.add.image(720, 450, "whisked_eggs");

		whisked_eggs.setVisible(false);
		const whisk = this.add.image(440, 495, "whisk");
		whisk.setScale(0.3, 0.3);
		whisk.setInteractive().on('pointerdown', () => {
			clickCnt++;
			if (clickCnt === 4) {
				rect3.setFillStyle(0x00ff00);
				flour_egg_2.setVisible(false);
				whisked_eggs.setScale(0.8, 0.8);
				whisked_eggs.setVisible(true);
			}
		});
		const wet_dough_1= this.add.image(720, 450, "wet_dough_1");

		wet_dough_1.setVisible(false);
		const rect4 = this.add.rectangle(985, 480, 20, 20, 0x808080, 1);
		whisked_eggs.setInteractive().on('pointerdown', () => this.kneadDough())
		.on('pointerdown', () => {
			clickCnt++;
			if(clickCnt === 5) {
				rect4.setFillStyle(0x00ff00);
				whisked_eggs.setVisible(false);
				wet_dough_1.setScale(0.65, 0.65);
				wet_dough_1.setVisible(true);

			}
		});

		let initialTime = 10;
		const txt = this.add.text(1000, 32, 'Countdown: ' + this.formatTime(initialTime), textStyle);
		const wet_dough_2 = this.add.image(720, 450, "wet_dough_2");
		const rect5 = this.add.rectangle(985, 530, 20, 20, 0x808080, 1);
		wet_dough_2.setVisible(false);
		wet_dough_2.setScale(0.65, 0.65);
		txt.setVisible(false);
		wet_dough_1.setInteractive().on('pointerdown', () => this.onEvent())
		.on('stop', () => this.kneadDough())
		.on('pointerdown', () => {
			clickCnt++;
			if(clickCnt === 6) {
				rect5.setFillStyle(0x00ff00);
				txt.setVisible(true);
				wet_dough_1.setVisible(false);
				wet_dough_2.setVisible(true);
			}
			let timer = this.time.addEvent({delay:1000, callback: () => this.onEvent(), callbackScope:this, loop:true});
			this.timer = timer;
		});

		
		


		const rect6 = this.add.rectangle(985, 580, 20, 20, 0x808080, 1);
		const sliced_dough_1 = this.add.image(715, 430, "sliced_dough_1");
		const sliced_dough_2 = this.add.image(715, 430, "sliced_dough_2");
		const sliced_dough_3 = this.add.image(715, 445, "sliced_dough_3");
		const sliced_dough_4 = this.add.image(715, 445, "sliced_dough_4");
		sliced_dough_1.setScale(0.15, 0.15);
		sliced_dough_2.setScale(0.15, 0.15);
		sliced_dough_3.setScale(0.15, 0.15);
		sliced_dough_4.setScale(0.15, 0.15);
		sliced_dough_1.setVisible(false);
		sliced_dough_2.setVisible(false);
		sliced_dough_3.setVisible(false);
		sliced_dough_4.setVisible(false);
		const knife = this.add.image(820, 180, "knife");
		knife.setScale(0.3, 0.3);

		const addBackground = this.add.rectangle(720, 450, 2000, 2000, 0x000000, 0.5);
		addBackground.setVisible(false);

		const plank = this.add.image(680, 300, "plank");
		plank.setScale(0.37, 0.37);
		plank.setVisible(false);
		plank.setInteractive().on('pointerdown', () => {
			this.scene.start('Level');
		})

		const completeLevel = this.add.text(680, 300, "", {});
		completeLevel.setOrigin(0.45, 0.45);
		completeLevel.setVisible(false);
		completeLevel.text = "Complete Fettuccine";
		completeLevel.setStyle({"fontFamily": "PixelifySans-Regular", "fontSize": "58px"});

		let waitingTime = 3;
		
		knife.setInteractive().on('pointerdown', () => {
			wet_dough_2.setVisible(false);
			clickCnt++;
			if(clickCnt === 7){
				sliced_dough_1.setVisible(true);
				sliced_dough_2.setVisible(true);
				sliced_dough_3.setVisible(true);
				sliced_dough_4.setVisible(true);
			}
		})
		.on('pointerdown', () => {
			clickCnt++;
			if(clickCnt === 8) {
				rect6.setFillStyle(0x00ff00);
				sliced_dough_2.setPosition(730, 430);
				sliced_dough_3.setPosition(730, 445);
			}
		})
		.on('pointerdown', () => {
			clickCnt++;
			if(clickCnt === 9) {
				let delay = this.time.addEvent({delay:2000, callback: () => this.onEnd(), callbackScope:this, loop:true});
				this.delay = delay;
			}
		});
	
			






		this.level_bg = level_bg;
		this.chopping_board = chopping_board;
		this.eggs_1 = eggs_1;
		this.flour_egg_1 = flour_egg_1;
		this.olive_oil = olive_oil;
		this.tissues = tissues;
		this.knife = knife;
		this.semolina_flour_jar = semolina_flour_jar;
		this.whisk = whisk;
		this.napkin = napkin;
		this.flour_jar = flour_jar;
		this.tomatoes = tomatoes;
		this.basil = basil;
		this.clipboard = clipboard;
		this.rect1 = rect1;
		this.rect2 = rect2;
		this.rect3 = rect3;
		this.rect4 = rect4;
		this.rect5 = rect5;
		this.rect6 = rect6;

		this.flour = flour;
		this.whisked_eggs = whisked_eggs;
		this.wet_dough_1 = wet_dough_1;
		this.txt = txt;
		this.initialTime = initialTime;
		this.wet_dough_2 = wet_dough_2;

		this.sliced_dough_1 = sliced_dough_1;
		this.sliced_dough_2 = sliced_dough_2;
		this.sliced_dough_3 = sliced_dough_3;
		this.sliced_dough_4 = sliced_dough_4;

		this.completeLevel = completeLevel;
		this.plank = plank;
		this.addBackground = addBackground;
		this.waitingTime = waitingTime;


		this.events.emit("scene-awake");

		//}
	}

	/** @type {Phaser.GameObjects.Image} */
	level_bg;
	/** @type {Phaser.GameObjects.Image} */
	eggs_1;
	/** @type {Phaser.GameObjects.Image} */
	olive_oil;
	/** @type {Phaser.GameObjects.Image} */
	tissues;
	/** @type {Phaser.GameObjects.Image} */
	knife;
	/** @type {Phaser.GameObjects.Image} */
	semolina_flour_jar;
	/** @type {Phaser.GameObjects.Image} */
	whisk;
	/** @type {Phaser.GameObjects.Image} */
	chopping_board;
	/** @type {Phaser.GameObjects.Image} */
	napkin;
	/** @type {Phaser.GameObjects.Image} */
	tomatoes;
	/** @type {Phaser.GameObjects.Image} */
	basil;
	/** @type {Phaser.GameObjects.Image} */
	flour_jar;
	/** @type {Phaser.GameObjects.Image} */
	clipboard;
	/** @type {Phaser.GameObjects.Image} */
	flour;
	/** @type {Phaser.GameObjects.Image} */
	flour_egg_1;
	/** @type {Phaser.GameObjects.Image} */
	flour_egg_2;
	/** @type {Phaser.GameObjects.Image} */
	whisked_eggs
	/** @type {Phaser.GameObjects.Image} */
	wet_dough_1;
	/** @type {Phaser.GameObjects.Text} */
	txt;
	/** @type Number */
	initialTime;
	/** @type {Phaser.GameObjects.Image} */
	wet_dough_2;
	/** @type Time event */
	timer;
	/** @type {Phaser.GameObjects.Image} */
	sliced_dough_1;
	/** @type {Phaser.GameObjects.Image} */
	sliced_dough_2;
	/** @type {Phaser.GameObjects.Image} */
	sliced_dough_3;
	/** @type {Phaser.GameObjects.Image} */
	sliced_dough_4;
	/** @type {Phaser.GameObjects.Image} */
	plank;
	/** @type {Phaser.GameObjects.Text} */
	completeLevel;
	/** @type Time event */
	delay;
	/** @type Number */
	waitingTime;


	/* START-USER-CODE */

	kneadDough() {
		this.tweens.add({
			targets:[this.wet_dough_1],
			rotation:-Math.PI * 2,
			duration: 1000,
			repeat: -1
		});
	}

	formatTime(seconds) {
		let minutes = Math.floor(seconds/60);
		let partInSeconds = seconds%60;
		partInSeconds = partInSeconds.toString().padStart(2, '0');
		return `${minutes}:${partInSeconds}`;
	}

	onEvent () {
		this.initialTime -= 1;
		if(this.initialTime === 0) {
			this.time.removeEvent(this.timer);
			this.txt.setVisible(false);
		};
		this.txt.setText(`Countdown: ${this.formatTime(this.initialTime)}`);
	}

	onEnd () {
		this.waitingTime -= 1;
		if(this.waitingTime === 0) {
			this.time.removeEvent(this.delay);
			this.addBackground.setVisible(true);
			this.plank.setVisible(true);
			this.completeLevel.setVisible(true);
		}
	}



	// complete () {
	// 	this.level_bg = this.add.image(640, 360, "level_bg");
	// 	this.level_bg.setScale(0.5, 0.5);
	// 	this.plank = this.scene.add.image(680, 300, "plank", {backgroundColor: "rgb(255 255 255 / 0.5)",});
	// 	this.completeLevel = this.scene.add.text(680, 300, "", {});
	// 	this.plank.setScale(0.35, 0.35);
	// 	this.completeLevel.setOrigin(0.45, 0.45);
	// }

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

