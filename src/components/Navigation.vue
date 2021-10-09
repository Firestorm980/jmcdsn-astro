<template>
	<div class="navigation">
		<button
			class="button button--header button--header-open"
			type="button"
			aria-controls="navigation-inner"
			:aria-expanded="isOpen"
			@click="handleOpenClick"
		>
			<span class="sr-only">
				Open navigation
			</span>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-list"></use>
			</svg>
		</button>
		<div
			id="navigation-inner"
			class="navigation__inner"
			:data-open="isOpen"
			@keydown="handleKeydown"
		>
			<button
				class="button button--header button--header-close"
				type="button"
				aria-controls="navigation-inner"
				:aria-expanded="isOpen"
				@click="handleCloseClick"
			>
				<span class="sr-only">
					Close navigation
				</span>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-close"></use>
				</svg>
			</button>
			<nav class="navigation navigation--primary">
				<ul>
					<li><a href="/about-me/">About Me</a></li>
					<li><a href="/my-thoughts/">My Thoughts</a></li>
					<li><a href="/contact/">Contact</a></li>
				</ul>
			</nav>

		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			isActive: false,
			isBreakpoint: false,
		}
	},
	methods: {
		handleKeydown(event) {
			const { target, shiftKey, key } = event;
			const container = document.getElementById('navigation-inner');
			const focusable = Array.from( container.querySelectorAll('a, button') );
			const {0: first, [focusable.length - 1]: last} = focusable;

			// Bail early
			if ( this.isBreakpoint ) {
				return;
			}

			// Bail if not tab.
			if ( 'Tab' !== key ) {
				return;
			}

			// Forwards
			if ( !shiftKey && target === last ) {
				event.preventDefault();
				first.focus();
			}

			// Backwards
			if ( shiftKey && target === first ) {
				event.preventDefault();
				last.focus();
			}
		},
		handleCloseClick() {
			this.isActive = false;
			console.log('close');
		},
		handleOpenClick() {
			this.isActive = true;
			console.log('open');
		}
	},
	mounted() {
		const mq = window.matchMedia('(min-width: 40em)');

		mq.addEventListener('change', () => {
			this.isBreakpoint = mq.matches;
		})
	},
	computed: {
		isOpen() {

			if ( this.isBreakpoint ) {
				return true;
			}

			return this.isActive;
		}
	}
}
</script>
