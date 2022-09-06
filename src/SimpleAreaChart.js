import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";

const SimpleAreaChart = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		//Data a mostrar (tener en cuenta que el 'datakey' deberá ser el mismo que el atributo a graficar, en este caso ventas)
		setData([
			{
				name: "Enero",
				ventas: 192,
			},
			{
				name: "Febrero",
				ventas: 94,
			},
			{
				name: "Marzo",
				ventas: 74,
			},
			{
				name: "Abril",
				ventas: 127,
			},
			{
				name: "Mayo",
				ventas: 143,
			},
			{
				name: "Junio",
				ventas: 210,
			},
			{
				name: "Julio",
				ventas: 134,
			},
		]);
	});

	return (
		<div>
			<h1>Cantidad de ventas</h1>
			<AreaChart
				width={500}
				height={400}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="ventas"
					stroke="#8884d8" //Colores de la linea de la grafica
					fill="#8884d8" //Colores del fondo de la grafica
				/>
			</AreaChart>
		</div>
	);
};
export default SimpleAreaChart;
