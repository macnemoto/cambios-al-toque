<script>
    import logo from '$lib/img/logo.png';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<!-- <header class="bg-custom-purple">
    <img class="h-16 w-80 object-cover pl-3" src={logo} alt="">

</header> -->
<Navbar class="bg-indigo-800" let:hidden let:toggle>
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
    <NavUl {hidden} class="text-white">
      <NavLi class="!text-white" href="/" active={true}>Home</NavLi>
      <NavLi class="!text-white" href="/about">About</NavLi>
      <NavLi class="!text-white" href="/services">Services</NavLi>
      <NavLi class="!text-white" href="/pricing">Pricing</NavLi>
      <NavLi class="!text-white" href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>