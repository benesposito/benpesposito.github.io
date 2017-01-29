class Tile
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.color = color(255, 255, 255);
		this.owned = false;
		this.level = 0;
		this.cost = 100;
	}

	update()
	{
		this.color = color(255, 255, 255);

		if(this.owned)
		{
			this.color = color(250 - this.level * 10, 255, 250 - this.level * 10);
		}

		if(mouseX > this.x && mouseX < this.x + SCL && mouseY > this.y && mouseY < this.y + SCL)
		{
			if(mouseIsPressed && money >= this.cost)
			{
				money -= this.cost;
				this.cost += this.cost * 10;

				if(this.level < 25)
				{
					if(!this.owned)
						this.owned = true;

					this.level++;
					level++;
				}
			}
			else
				this.color = color(200, 200, 200);
		}

		fill(this.color);
		rect(this.x, this.y, SCL, SCL);
		fill(0);
		text(this.level, this.x + SCL / 2, this.y + SCL / 2);
		text("$" + this.cost, this.x + SCL / 2 - SCL / 4, this.y + SCL / 2 + SCL / 4);
	}
}