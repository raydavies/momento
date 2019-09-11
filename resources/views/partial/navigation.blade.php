<ul class="nav navbar-nav navbar-right collapse navbar-collapse">
	@if (Auth::check())
		<li>
			<a href="{{ route('admin.dashboard') }}">Admin Dashboard</a>
		</li>
	@endif
	<li class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown">Our Company <span class="caret"></span></a>
		<ul class="dropdown-menu" role="menu">
			<li><a href="">About Us</a></li>
			<li><a href="">Testimonials</a></li>
		</ul>
	</li>
</ul>
