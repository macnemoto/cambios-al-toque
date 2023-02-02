<script>
	import { Button } from 'flowbite-svelte';
</script>

<div class="grid gap-1 grid-cols-1 grid-rows-1 px-5 mt-10 xl:mx-40 xl:mt-16 2xl:mx-80 2xl:mt-16">
	<div
		class="grid gap-1 grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 justify-center items-center"
	>
		<div class="">
			<h2 class="text-white text-3xl text-center font-bold mb-5 lg:text-3xl xl:text-start">
				¿Necesitas ayuda en algo?
			</h2>
			<p class=" text-center text-slate-600 mb-2 xl:text-start">
				Nuestros operadores te atenderán enseguida.
			</p>
			<p class="text-white font-bold text-center mb-2 xl:text-start">Asistencia ventas</p>
			<div class="flex flex-col justify-center items-center xl:justify-start xl:items-start">
				<Button class="mx-10 my-2 sm:mx-52 md:mx-10 xl:mx-0 2xl:my-5" gradient color="greenToBlue">
					<img class="w-5 mr-2" src="https://www.casacoins.com/landing/WhatsApp.svg" alt="" /> Quiero
					registrarme como comprador</Button
				>

				<p class="text-white font-bold mb-1">Horario de atención:</p>
				<p class=" text-center text-slate-600 mb-1">Lunes a viernes - 09:30 a 18:30 hrs</p>
				<p class=" text-center text-slate-600 mb-1">Sábado - 10:00 a 14:00 hrs</p>
			</div>
		</div>
		<div class="flex justify-center items-center xl:justify-center xl:items-center">
			<img
				class=" w-64 h-64  sm:w-80 sm:h-80 lg:w-96 lg:h-96  object-fit-cover"
				src="https://www.casacoins.com/landing/ContactCoin.svg"
				alt=""
				srcset=""
			/>
		</div>
	</div>
</div>
