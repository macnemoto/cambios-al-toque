<script>
    import logo from '$lib/img/logo.png';
    import { Button } from 'flowbite-svelte';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<!-- <header class="bg-custom-purple">
    <img class="h-16 w-80 object-cover pl-3" src={logo} alt="">

</header> -->
<Navbar class="!bg-custom-purple" let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src={logo}
        class=" h-9 object-cover pl-3 sm:h-9"
        alt="Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold text-white">
        Cambio al toque
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} class="text-white sm:flex sm:items-center sm:justify-center">
      <NavLi class="!text-black sm:!text-white " href="/">Iniciar sesión</NavLi>
      <NavLi class="!text-white sm:hidden block " active={true} href="/registrase">Registrase</NavLi>
      <NavLi class="!text-white hidden sm:block" href="/about"><Button gradient color="purple">Registrase</Button></NavLi>
      <!-- <NavLi class="!text-white" href="/services">Services</NavLi>
      <NavLi class="!text-white" href="/pricing">Pricing</NavLi>
      <NavLi class="!text-white" href="/contact">Contact</NavLi> -->
    </NavUl>
  </Navbar>