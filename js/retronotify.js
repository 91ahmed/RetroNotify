/**
 *	@author ahmed hassan
 *	@link github.com/91ahmed
 */
class RetroNotify 
{
	/**
	 *	The construct will store the properties and options of RetroNotify and will execute it.
	 *
	 *	@param object, options (client options)
	 *	@return void
	 */
	constructor (options = {}) 
	{
		// Store default options
		this.default = {
			class: null,
			id: null,
			contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			contentHeader: 'Message',
			contentClose: '×',
			background: '#FFF', // White
			color: '#012D2D', // Black
			openDelay: 500,
			closeDelay: 6000,
			animate: 'slideBottomRight',
			transition: '0.5s', // Css transition
			style: null,
			fixed: false
		}

		// Store client options
		this.options = options

		// Store RetroNotify components (HTML elements)
		this.retroNotifyContainer
		this.retroNotifyMain
		this.retroNotifyHeader
		this.retroNotifyClose

		// Store available animations
		this.animation = [
			'slideBottomLeft', 'slideBottomRight', 'slideTopLeft', 'slideTopRight',
			'slideLeftTop', 'slideLeftBottom', 'slideRightTop', 'slideRightBottom',
			'fadeBottomLeft', 'fadeBottomRight', 'fadeTopLeft', 'fadeTopRight'
		]

		// Store available style
		this.style = ['blue', 'red', 'black', 'green', 'yellow', 'sky', 'gray']

		// Execute RetroNotify
		this.retroNotifyExecute()
	}

	/**
	 *	Execute RetroNotify
	 *
	 *	@return void
	 */
	retroNotifyExecute ()
	{
		this.retroNotifyAnimation()
		this.retroNotifyStyle()
		this.retroNotifyAttributes()
	}

	/**
	 *	Get options from default and options object.
	 *
	 *	@param string, key (option key)
	 *	@return string
	 */
	retroNotifyGetOption (key)
	{
		let result

		// if client add options
		if (Object.hasOwn(this.options, key)) {
			// ture
			// get option from this.options
			result = this.options[key]
		} else {
			// fasle
			// get option from this.default
			result = this.default[key]
		}

		return result
	}

	/**
	 *	Create new RetroNotify element (components) in the HTML document.
	 *
	 *	@return void
	 */
	retroNotifyCreate ()
	{
		// Create components
		this.retroNotifyContainer = document.createElement('div')
		this.retroNotifyMain = document.createElement('div')
		this.retroNotifyHeader = document.createElement('div')
		this.retroNotifyContent = document.createElement('div')
		this.retroNotifyClose = document.createElement('div')

		// Set class attribute to components
		this.retroNotifyContainer.setAttribute('class', 'retro-notify-container')
		this.retroNotifyMain.setAttribute('class', 'retro-notify-main')
		this.retroNotifyHeader.setAttribute('class', 'retro-notify-header')
		this.retroNotifyContent.setAttribute('class', 'retro-notify-content')
		this.retroNotifyClose.setAttribute('class', 'retro-notify-close')

		// Append components to the HTML body
		document.body.appendChild(this.retroNotifyContainer)	
		this.retroNotifyContainer.appendChild(this.retroNotifyMain)
		this.retroNotifyMain.appendChild(this.retroNotifyHeader)
		this.retroNotifyMain.appendChild(this.retroNotifyContent)
		this.retroNotifyMain.appendChild(this.retroNotifyClose)

		// Add HTML content inside components
		this.retroNotifyHeader.innerHTML = this.retroNotifyGetOption('contentHeader')
		this.retroNotifyContent.innerHTML = this.retroNotifyGetOption('contentText')
		this.retroNotifyClose.innerHTML = this.retroNotifyGetOption('contentClose')
	}

	/**
	 *	Execute animation.
	 *
	 *	@return void
	 */
	retroNotifyAnimation ()
	{
		// Check if the animate value is in the animation array
		if (this.animation.includes(this.retroNotifyGetOption('animate'))) {
			// ture
			// set selected animation
			this.retroNotifySetAnimation()
		} else {
			// false
			// set default animation
			this.retroNotifyDefaultAnimation()
		}
	}

	/**
	 *	Set RetroNotify animation.
	 *
	 *	@return void
	 */
	retroNotifySetAnimation ()
	{
		let open_delay = this.retroNotifyGetOption('openDelay') // open
		let close_delay = open_delay+this.retroNotifyGetOption('closeDelay') // open+close
		let remove_delay = open_delay+close_delay+2000 // open+close+2000

		let animate = this.retroNotifyGetOption('animate')

		// Create RetroNotify
		this.retroNotifyCreate()
		this.retroNotifyContainer.classList.add("retro-"+animate+"-ready") // add ready class
		this.retroNotifyContainer.style.transition = this.retroNotifyGetOption('transition') // add transition

		// Open RetroNotify
		setTimeout(() => {
			this.retroNotifyContainer.classList.add("retro-"+animate+"-open")
		}, open_delay)

		// Close RetroNotify by Time
		setTimeout(() => {
			if (this.retroNotifyGetOption('fixed') == false) {
				this.retroNotifyContainer.classList.add("retro-"+animate+"-close")
			}
		}, close_delay)

		// Close RetroNotify by Click
		this.retroNotifyClose.addEventListener('click', () => {
			this.retroNotifyContainer.classList.add("retro-"+animate+"-close")
			// Remove RetroNotify
			setTimeout(() => {
				this.retroNotifyContainer.remove()
			}, 1200)
		})

		// Remove RetroNotify
		setTimeout(() => {
			if (this.retroNotifyGetOption('fixed') == false) {
				this.retroNotifyContainer.remove()
			}
		}, remove_delay)
	}

	/**
	 *	Set static animation. 
	 *	This will execute if the client does not specify an animation.
	 *
	 *	@return void
	 */
	retroNotifyDefaultAnimation ()
	{
		// Create RetroNotify
		this.retroNotifyCreate()
		// Add default style
		this.retroNotifyContainer.classList.add("retro-default-style")

		// Close RetroNotify on click
		this.retroNotifyClose.addEventListener('click', () => {
			this.retroNotifyContainer.remove()
		})
	}

	/**
	 *	Add style
	 */
	retroNotifyStyle ()
	{
		// Check if the style value is in the style array
		if (this.style.includes(this.retroNotifyGetOption('style'))) {
			// ture
			// set selected style
			let style = this.retroNotifyGetOption('style')
			this.retroNotifyMain.classList.add("retro-"+style)
		} else {
			// false
			// set custom style
			this.retroNotifyMain.style.backgroundColor = this.retroNotifyGetOption('background')
			this.retroNotifyMain.style.color = this.retroNotifyGetOption('color')
		}
	}

	/**
	 *	Add attributes
	 */
	retroNotifyAttributes ()
	{
		if(this.retroNotifyGetOption('class') !== null) {
			this.retroNotifyContainer.classList.add(this.retroNotifyGetOption('class'))
		}

		if(this.retroNotifyGetOption('id') !== null) {
			this.retroNotifyContainer.setAttribute('id', this.retroNotifyGetOption('id'))
		}
	}
}