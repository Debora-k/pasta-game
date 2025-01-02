
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// start background
		const ss = this.add.image(640, 360, "ss");
		ss.setScale(0.5, 0.5);
		ss.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);

		const title_bg = this.add.image(640, 250, "title_bg");
		title_bg.setScale(0.28, 0.28);
	 	title_bg.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);

		const welcome = this.add.text(640, 220, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "Pasta Maker";
		welcome.setStyle({"fontFamily": "PixelifySans-Bold", "fontSize": "64px"});

		const fettuccine = this.add.image(180, 485, "fettuccine");
		fettuccine.setScale(0.2, 0.2);
		fettuccine.setInteractive().on('pointerover', () => this.onHover())
		    .on('pointerout', () => this.onHoverEnd())
			.on('pointerup', () => {
				this.scene.start('Level1');
			});

		const plank_1 = this.add.image(180, 620, "plank");
		plank_1.setScale(0.15, 0.15);

		const fettuccine_txt = this.add.text(180, 620, "", {});
		fettuccine_txt.setOrigin(0.5, 0.5);
		fettuccine_txt.text = "Fettuccine";
		fettuccine_txt.setStyle({"fontFamily": "PixelifySans-Bold", "fontSize": "30px"});

		const rigatoni = this.add.image(495, 485, "rigatoni");
		rigatoni.setScale(0.2, 0.2);
		

		const plank_2 = this.add.image(495, 620, "plank");
		plank_2.setScale(0.15, 0.15);

		const rigatoni_txt = this.add.text(495, 620, "", {});
		rigatoni_txt.setOrigin(0.5, 0.5);
		rigatoni_txt.text = "Rigatoni";
		rigatoni_txt.setStyle({"fontFamily": "PixelifySans-Bold", "fontSize": "30px"});

		const farfalle = this.add.image(795, 485, "farfalle");
		farfalle.setScale(0.2, 0.2);

		const plank_3 = this.add.image(795, 620, "plank");
		plank_3.setScale(0.15, 0.15);
		
		const farfalle_txt = this.add.text(795, 620, "", {});
		farfalle_txt.setOrigin(0.5, 0.5);
		farfalle_txt.text = "Farfalle";
		farfalle_txt.setStyle({"fontFamily": "PixelifySans-Bold", "fontSize": "30px"});

		const lasagna = this.add.image(1090, 485, "lasagna");
		lasagna.setScale(0.2, 0.2);

		const plank_4 = this.add.image(1090, 620, "plank");
		plank_4.setScale(0.15, 0.15);

		const lasagna_txt = this.add.text(1090, 620, "", {});
		lasagna_txt.setOrigin(0.5, 0.5);
		lasagna_txt.text = "Lasagna";
		lasagna_txt.setStyle({"fontFamily": "PixelifySans-Bold", "fontSize": "30px"});

		this.ss = ss;
		this.title_bg = title_bg;
		this.welcome = welcome;
		this.fettuccine = fettuccine;
		this.plank_1 = plank_1;
		this.rigatoni = rigatoni;
		this.plank_2 = plank_2;
		this.farfalle = farfalle;
		this.plank_3 = plank_3;
		this.lasagna = lasagna;
		this.plank_4 = plank_4;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	ss;
	/** @type {Phaser.GameObjects.Image} */
	title_bg;
	/** @type {Phaser.GameObjects.Text} */
	welcome;
	/** @type {Phaser.GameObjects.Image} */
	fettuccine;
	/** @type {Phaser.GameObjects.Image} */
	plank_1;
	/** @type {Phaser.GameObjects.Image} */
	rigatoni;
	/** @type {Phaser.GameObjects.Image} */
	plank_2;
	/** @type {Phaser.GameObjects.Image} */
	farfalle;
	/** @type {Phaser.GameObjects.Image} */
	plank_3;
	/** @type {Phaser.GameObjects.Image} */
	lasagna;
	/** @type {Phaser.GameObjects.Image} */
	plank_4;




	/* START-USER-CODE */

	// Write more your code here
	onHover() {
		this.tweens.add({
			targets: [this.fettuccine],
			scale: {from:0.2, to:0.25},
			repeat: 0,
			duration: 300
      });

	}
	
	onHoverEnd() {
		this.tweens.add({
			targets: [this.fettuccine],
			scale: {from:0.25, to:0.2},
			repeat: 0,
			duration: 300
      });
	}


	create() {
		this.editorCreate();
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

