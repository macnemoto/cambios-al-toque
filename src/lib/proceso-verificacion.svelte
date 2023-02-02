<script>
	import { Button } from 'flowbite-svelte';
</script>

<div class="grid gap-1 grid-cols-1 grid-rows-1 px-5 mt-10 xl:mx-40 xl:mt-16 2xl:mx-80 2xl:mt-16">
	<h2 class="text-white text-3xl text-center font-bold mb-10 lg:text-5xl">
		¿Por qué debo completar un formulario?
	</h2>
	<div
		class="grid gap-1 grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 justify-center items-center"
	>
		<div class="justify-center items-center lg:order-last">
			<p class=" text-center text-slate-600 mb-5">
				Las regulaciones financieras vigentes nos exigen comprobar la identidad de nuestros clientes
				y así evitar cualquier acción ilegal asociada a la compra de activos digitales. Esto es
				requerido y fiscalizado por la Unidad de Análisis Financiero.
			</p>
			<p class=" text-center text-slate-600 mb-5">
				Una vez verificado, podrás acceder al módulo de compra de criptomonedas, así como ver tus
				movimientos y/o facturas. Verifica tu cuenta y compra criptomonedas las veces que quieras.
			</p>
			<div class="flex justify-center items-center">
				<Button class="mx-10 my-2 sm:mx-52 md:mx-10" gradient color="pinkToOrange"
					>¡Quiero registrarme como comprador!</Button
				>
			</div>
		</div>
		<div class="flex justify-center items-center xl:justify-center xl:items-center">
			<img
				class=" w-64 h-64  sm:w-80 sm:h-80 lg:w-96 lg:h-96  object-fit-cover"
				src="https://www.casacoins.com/landing/WhyForm.svg"
				alt=""
				srcset=""
			/>
		</div>
	</div>
</div>
