<script>
	import { Button } from 'flowbite-svelte';
	import start from '../lib/img/HeroCrypto.svg';
</script>

<div class="mt-16 px-5 flex sm:mx-20 sm:mt-20 sm:px-6 2xl:mx-64">
	<div class="flex flex-col justify-center items-center sm:pr-5">
		<h1 class="text-4xl text-white text-center font-bold mb-3">Compra criptomonedas sin pagar comisiones</h1>
		<p class="text-center text-slate-600">
			Compra fácilmente bitcoins, USDT y otras criptomonedas en menos de 7 minutos y recíbelas en
			cualquier parte del mundo.
		</p>
        <Button gradient color="purpleToBlue" class="mt-5 py-4">Registrarme como comprador</Button>

	</div>
	<div>
		<img class="mt-4" src={start} alt="startImg" />
	</div>
</div>
