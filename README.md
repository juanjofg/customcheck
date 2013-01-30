<h1>Custom checkboxes and radio buttons plug-in for jquery</h1>


Funcionalidad básica incluida.

Sustituye los controles originales.
Establece 6 estados para cada elemento
- unchecked
- unchecked:hover
- checked
- checked:hover
- disabled
- disabled:checked

This is a jQuery plugin, so it´s the only requirement. At least, 1.8.2.

<h2>Cómo utilizarlo</h2>

Incluir jquery.js (1.8.2) y jquery.customcheck.js en la cabecera (HEAD) de tu documento html:

<pre>
	<code>
	&lt;head&gt;
		&lt;script src="jquery-1.8.2.min.js"&gt;&lt;/script&gt;
		&lt;script src="jquery.customcheck.js"&gt;&lt;/script&gt;
	&lt;/head&gt;
	</code>
</pre>
Si buscas optimizar, hazlo al final del documento.

Utiliza tu selector preferido y aplica el plugin:
<pre>
	<code>
	&lt;script&gt;
		$('form').customInputs();
	&lt;/script&gt;
	</code>
</pre>