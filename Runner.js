const SCL = 50;
const ROWS = 30;
const COLS = 30;

let tiles = [];
let money = 100;
let owned = 1;
let level = 0;

function setup()
{
	createCanvas(2000, 2000);

	for(i = 0; i < ROWS; i++)
	{
		tiles[i] = [];
		for(j = 0; j < COLS; j++)
		{
			tiles[i][j] = new Tile(SCL * j, SCL * i);
		}
	}
}

function draw()
{
	background(100);
	
	for(i = 0; i < ROWS; i++)
	{
		for(j = 0; j < COLS; j++)
		{
			tiles[i][j].update();
		}
	}

	fill(0);
	text("Money: $" + money + " | Level: " + level, 10, 10);
	money += 1 * level;
}