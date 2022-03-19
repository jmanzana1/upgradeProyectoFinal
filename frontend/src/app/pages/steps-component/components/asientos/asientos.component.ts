import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-asientos',
	templateUrl: './asientos.component.html',
	styleUrls: ['./asientos.component.scss']
})
export class AsientosComponent implements OnInit {

	public seatConfig: any = null;
	public seatmap = [] as any;
	public mapObjetos = [] as any;
	public seatChartConfig = {
		showRowsLabel : true,
		showRowWisePricing : true,
		newSeatNoForRow : true
	}
	public cart = {
		selectedSeats : [],
		seatstoStore : [],
		totalamount : 0,
		cartId : "",
		eventId : 0
	};
	
	constructor() { }
	
	ngOnInit(): void {

		this.seatConfig = [
			{
			  "seat_price": 500,
			  "seat_map": [
				{
				  "seat_label": "G",
				  "layout": "_cccccccccccc_ccccccccccccccccc__cccccccccccc__________"
				},
				{
				  "seat_label": "F",
				  "layout": "_cccccccccccc_cccccccccccccccc___cccccccccccc__________"
				},
				{
				  "seat_label": "E",
				  "layout": "_cccccccccccc__ccccccccccccccc___cccccccccccc__________"
				},
				{
				  "seat_label": "D",
				  "layout": "_cccccccccccc__cccccccccccccc____cccccccccccc__________"
				},
				{
				  "seat_label": "C",
				  "layout": "_cccccccccccc___ccccccccccccc____cccccccccccc__________"
				},
				{
				  "seat_label": "B",
				  "layout": "_cccccccccccc___ccccccccccccc____cccccccccccc__________"
				},
				{
				  "seat_label": "A",
				  "layout": "_cccccccccccc____ccccccccccc_____cccccccccccc__________"
				},
				{
				  "seat_label": " ",
				  "layout": "_____________________________________________"
				}
			  ]
			}
		];

		this.processSeatChart(this.seatConfig);
	}

	public processSeatChart ( map_data : any[] )
	{

		if( map_data.length > 0 )
		{
			let seatNoCounter = 1;
			
			for (let __counter = 0; __counter < map_data.length; __counter++) {
				
				let row_label = "";
				let item_map = map_data[__counter].seat_map;
		
				//Get the label name and price
				row_label = "Row "+item_map[0].seat_label + " - ";
				
				if( item_map[ item_map.length - 1].seat_label != " " )
				{
					row_label += item_map[ item_map.length - 1].seat_label;
				}
				else
				{
					row_label += item_map[ item_map.length - 2].seat_label;
				}
				
				row_label += " : Rs. " + map_data[__counter].seat_price;
				console.log("item map", item_map)
				item_map.forEach( (map_element: {seat_label: string, layout: string}) => {
				
					let mapObj = {
						"seatRowLabel" : map_element.seat_label,
						"seats" : [],
						"seatPricingInformation" : row_label
					};
				
					row_label = "";
				
					let seatValArr = map_element.layout.split('');
								
					if( this.seatChartConfig.newSeatNoForRow )
					{
						seatNoCounter = 1; //Reset the seat label counter for new row
					}
					
					let totalItemCounter = 1;
					console.log("seat",seatValArr)
				
					seatValArr.forEach( (item: string )  => {

						let seatObj: { seatLabel:string, seatNo: string, key: string, price: number, status: string }  = {
							"key": map_element.seat_label + "_" + totalItemCounter,
							"price": map_data[__counter]["seat_price"],
							"status": "available",
							seatLabel: '',
							seatNo: ''
						};
					
						if( item != '_')
						{
							seatObj["seatLabel"] = map_element.seat_label+" "+seatNoCounter;

							if(seatNoCounter < 10)
							{ 
								seatObj["seatNo"] = "0"+seatNoCounter; 
							}
							else 
							{ 
								seatObj["seatNo"] = ""+seatNoCounter; 
							}
							
							seatNoCounter++;
						}
						else
						{
							seatObj["seatLabel"] = "";
						}
					
						totalItemCounter++;
						console.log("seatOb" ,seatObj)
						//this.mapObjetos.push(seatObj);
						//mapObj["seats"].push(seatObj);
					}); 
					
					//console.log(" \n\n\n Seat Objects " , mapObj);
					this.seatmap.push( mapObj );
		
				});
			}
			
		}
	}

	public selectSeat( seatObject : any )
	{

		console.log( "Seat to block: " , seatObject );
		/* if(seatObject.status == "available")
		{
			seatObject.status = "booked";
			this.cart.selectedSeats.push(seatObject.seatLabel);
			this.cart.seatstoStore.push(seatObject.key);
			this.cart.totalamount += seatObject.price;
		}
		else if( seatObject.status = "booked" )
		{
			seatObject.status = "available";
			let seatIndex = this.cart.selectedSeats.indexOf(seatObject.seatLabel);
			
			if( seatIndex > -1)
			{
			this.cart.selectedSeats.splice(seatIndex , 1);
			this.cart.seatstoStore.splice(seatIndex , 1);
			this.cart.totalamount -= seatObject.price;
			}
			
		} */
	}

	public blockSeats(seatsToBlock : string)
	{
		if(seatsToBlock != "")
		{
			
			var seatsToBlockArr = seatsToBlock.split(',');
			
			for (let index = 0; index < seatsToBlockArr.length; index++) {
				
				var seat =  seatsToBlockArr[index]+"";
				var seatSplitArr = seat.split("_");
				console.log("Split seat: " , seatSplitArr);
				
				for (let index2 = 0; index2 < this.seatmap.length; index2++) {
				
					const element = this.seatmap[index2];
					if(element.seatRowLabel == seatSplitArr[0])
					{
						var seatObj = element.seats[parseInt(seatSplitArr[1]) - 1];
						
						if(seatObj)
						{
							console.log("\n\n\nFount Seat to block: " , seatObj);
							seatObj["status"] = "unavailable";
							this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1] = seatObj;
							console.log("\n\n\nSeat Obj" , seatObj);
							console.log(this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1]);
							break;
						}
						
					}
				}
			
			}
		}
	
	}
}
