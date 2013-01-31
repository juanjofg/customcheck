Custom checkboxes and radio buttons plug-in for jquery
======================================================


Qué hace
--------

Sustituye los controles originales.

Establece 6 estados para cada elemento.

Soporte atributos <code>_name_</code> que incluyan punto (<code>_name_=&quot;with.dot&quot;</code>)

* unchecked
* unchecked:hover
* checked
* checked:hover
* disabled
* disabled:checked

Dependencias
------------
Es un plugin jQuery, así que necesitas jQuery (testeado con 1.8.2)

Cómo utilizarlo
---------------

Incluir jquery.js (1.8.2) y jquery.customcheck.js en la cabecera (<code>&lt;head&gt;</code>) de tu documento html:

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
		$(function(){
			$('form').customInputs();
		});
	&lt;/script&gt;
	</code>
</pre>

Navegadores
-----------
* Chrome
* Firefox
* Opera
* Safari
* =>IE7