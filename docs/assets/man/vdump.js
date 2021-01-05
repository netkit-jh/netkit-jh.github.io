import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>vdump - dump information traversing a uml_switch to standard output</p>
<h1>SYNOPSIS</h1>
<p><strong>vdump</strong> <em>VIRTUAL-COLLISION-DOMAIN-ID</em></p>
<h1>DESCRIPTION</h1>
<p>The <em>vdump</em> command starts uml_dump, which connect to a specific instance of uml_switch then dump in CAP format the packets received by this virtual switch to standard output. This, sniffers like tcpdump or wireshark can be used to print packet information.</p>
<p>The argument is the virtual collision domain id defined in lab.conf</p>
<h1>OPTIONS</h1>
<p>The following generic options are supported.</p>
<dl>
<dt><strong>-h</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--help</strong></dt>
<dd><p>Show usage information.</p>
</dd>
<dt><strong>--version</strong></dt>
<dd><p>Print information about the installed Netkit release and the host kernel version and exit. If ''<em>&lt;unavailable&gt;</em>'' is printed instead of a version number, then the corresponding information could not be retrieved (for example because a non-standard Netkit kernel or filesystem is being used).</p>
</dd>
</dl>
<h1>ENVIRONMENT VARIABLES</h1>
<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>
<p>Apart from this, <em>vdump</em> supports no other environment variables.</p>
<h1>EXAMPLES</h1>
<p>The following is an example using vdump to dump packets from the virtual collision domain id "A" and connect it to tcpdump for human readable description of the packets.</p>
<p>vdump A | tcpdump -r - -S 1500 -U</p>
<p>If you prefer the graphical GUI wireshark:</p>
<p>vdump A | wireshark -i - -k</p>
<h1>SEE ALSO</h1>
<p><em>vclean</em>(1), <em>vconfig</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vstart</em>(1).</p>
<h1>AUTHOR</h1>
<p><em>vlist</em> script: Julien Iguchi-Cartigny, Jean-Baptiste Machemie and Benoit Bitarelle.<br />
This man page: Julien Iguchi-Cartigny.</p>
`

const html = ReactHtmlParser(raw);
export default html;
