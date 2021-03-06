import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>Netkit - The NETwork emulation toolKIT</p>
<h1>DESCRIPTION</h1>
<p>Netkit is a self-contained low cost solution for the emulation of computer networks. Within the Netkit environment each network device is implemented by a virtual machine, and interconnection links are emulated by using virtual collision domains (which you can see as virtual hubs).</p>
<p>Each virtual machine can be configured to have an arbitrary number of (virtual) network interfaces. Virtual machines can also be configured to have no interfaces at all, in which case they can serve as standalone emulated hosts. However, this is not the application Netkit has been thought for. Netkit is <strong>not</strong> a host emulator: it is a network emulator.</p>
<p>Virtual machines use a customized filesystem which contains a standard Linux installation (at the time this man page is being written, it is a Debian distribution), which includes network oriented software such as routing daemons (RIP, OSPF, etc.), a bunch of servers (FTP, HTTP, etc.), firewalling utilities (iptables), diagnostic tools (ping, traceroute, tcpdump, etc.), and other applications. By configuring the appropriate software, it is possible to make a virtual machine behave as a specific network device (e.g., a router). See the README in the Netkit filesystem package or the online FAQs for instructions about changing the contents of the virtual machine filesystems.</p>
<p>Virtual machines make use of a variant of the standard Linux kernel which is compiled to be run as a userspace process. This variant is known as <em>User Mode</em> Linux (<em>UML</em>) kernel. You can find more information about UML at the <em>User-mode Linux Kernel Page</em> (<em>http://user-mode-linux.sourceforge.net</em>). See also the README in the Netkit kernel package for information about building a customized kernel for the virtual machines.</p>
<p>Netkit provides you with two alternative interfaces to start and configure virtual machines. A set of 'v'-prefixed commands (<em>vclean</em>, <em>vconf</em>, <em>vcrash</em>, <em>vhalt</em>, <em>vlist</em>, <em>vstart</em>), which allow to start and manage single virtual machines while providing finegrained control on their configuration, and a set of 'l'-prefixed commands (<em>lclean</em>, <em>lcrash</em>, <em>lhalt</em>, <em>linfo</em>, <em>lrestart</em>, <em>lstart</em>, <em>ltest</em>), which ease setting up preconfigured network laboratories consisting of several virtual machines.</p>
<h1>ENVIRONMENT VARIABLES</h1>
<p>In order for Netkit to work properly, the environment variable <strong>NETKIT_HOME</strong> must be set to the name of the directory Netkit has been installed into.<br />
The <strong>VLAB_HOME</strong> variable is recognized as well, but this only happens for backward compatibility. New Netkit installations and upgrades should use <strong>NETKIT_HOME</strong> instead.</p>
<h1>FILES</h1>
<p>Netkit stores its default configuration settings inside a file named 'netkit.conf'. The existence of this file is required in order to make Netkit work. See <strong>netkit.conf</strong>(5) for information about the location of this file and a description of its format.</p>
<h1>SEE ALSO</h1>
<p><em>lclean</em>(1), <em>lcrash</em>(1), <em>lhalt</em>(1), <em>linfo</em>(1), <em>lrestart</em>(1), <em>lstart</em>(1), <em>ltest</em>(1), <em>vclean</em>(1), <em>vconf</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vlist</em>(1), <em>vstart</em>(1), <em>lab.conf</em>(5), <em>lab.dep</em>(5), <em>netkit.conf</em>(5), Netkit filesystem README, Netkit kernel README, <em>Netkit-JH Home Page</em></p>
<p>(<em>https://netkit-jh.github.io</em>),</p>
<p><em>Netkit Home Page</em></p>
<p>(<em>http://www.netkit.org</em>),</p>
<p><em>The Linux Kernel Archives</em></p>
<p>(<em>http://www.kernel.org</em>),</p>
<p><em>The User-mode Linux Kernel Home Page</em></p>
<p>(<em>http://user-mode-linux.sourceforge.net</em>).</p>
<h1>AUTHOR</h1>
<p>This man page: Massimo Rimondini</p>
<p><em>Netkit-JH</em> is a fork of the Netkit-NG project, which is a fork of the original Netkit project. The Netkit-JH fork aimed to update Netkit-NG which stopped development in 2014 and sought to use a modern Debian distribution and kernel, as well as bring new features to the project.<br />
Netkit-JH's development is carried out on the netkit-jh's GitHub: https://github.com/netkit-jh/. The project is maintained by Joshua Hawking at the University of Warwick, along with several other students there.<br />
</p>
<p>Below is the original authors of Netkit, who without them, this project would not exist.<br />
</p>
<p><em>Netkit</em> is the result of the joint work of several people. The project is carried on by the Department of Computer Science and Automation of the University of Roma 3</p>
<p>(<em>http://www.dia.uniroma3.it</em>).</p>
<p>More precisely, people at the LUG (Linux User Group) Roma 3</p>
<p>(<em>http://www.lugroma3.org/</em>)</p>
<p>gave the initial startup and brought significant contributions that made Netkit become a progressively more powerful environment. People within the Computer Networks Research Group</p>
<p>(<em>http://www.dia.uniroma3.it/~compunet</em>)</p>
<p>actively supported the LUG team by providing new ideas and implementing new features, and authored the most recent releases.</p>
<p>At the time this man page is being written, the project is entirely carried on by the Computer Networks Research Group.</p>
<p>The Netkit team currently consists of:<br />
Giuseppe Di Battista<br />
Maurizio Patrignani<br />
Maurizio Pizzonia<br />
Massimo Rimondini</p>
<p>People involved across time also include:<br />
Andrea Cecchetti<br />
Lorenzo Colitti<br />
Matteo Corea<br />
Federico Mariani<br />
Stefano Pettini<br />
Flavia Picard<br />
Fabio Ricci</p>
<p>The Netkit team can be reached at the following address: &lt;contact@netkit.org&gt;. You can also use this address to submit bug reports. Alternatively, you can contact us via the mailing list &lt;netkit.users@dia.uniroma3.it&gt;.</p>
<h1>REPORTING BUGS</h1>
<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>
<p>Please follow the recommended templates when reporting bugs.</p>
`

const html = ReactHtmlParser(raw);
export default html;
