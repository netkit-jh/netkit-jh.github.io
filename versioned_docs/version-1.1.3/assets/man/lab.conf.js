import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>lab.conf - configuration of a Netkit lab</p>
<p>lab.dep - dependencies on the startup order of virtual machines in a lab</p>
<h1>DESCRIPTION</h1>
<p>This page describes the files involved in the setup of a Netkit lab and illustrates the basic procedure to set up your own virtual network with Netkit.</p>
<h1>CONFIGURING A NETKIT LAB</h1>
<p>A Netkit lab is essentially a directory containing some special files and subdirectories. Each subdirectory represents a virtual machine to be started, which will be named the same way as the subdirectory itself. Unless differently specified, simply the existence of a subdirectory causes a virtual machine to be started, even if the subdirectory is empty. Because of virtual machine naming conventions, subdirectories must not contain spaces in their names.</p>
<p>The lab directory may contain files and subdirectories having a special meaning. In the following, <em>lab-path</em> is assumed to be the directory where the lab is located.</p>
<dl>
<dt><em><em>lab-path</em>/lab.conf</em></dt>
<dd><p>This is the main lab configuration file. In this file you can specify the names of virtual machines to be started, any option that should be used when launching them, and the topology of the network that connects them. Optionally, you can also provide some descriptive information for the lab, which will be displayed upon its startup. This file is not explicitly required, but running a lab without a <em>lab.conf</em> file is kind of useless...</p>
</dd>
</dl>
<p>This file is a list of <em>machine</em>[<em>arg</em>]=<em>value</em> assignments, where <em>arg</em> can be an integer value or the name of a <strong>vstart</strong> option (see <strong>vstart</strong>(1)).</p>
<blockquote>
<dl>
<dt>–</dt>
<dd><p>If <em>arg</em> is an integer value, then <em>value</em> is the name of the collision domain to which interface <strong>eth</strong><em>arg</em> of machine <em>machine</em> must be connected (note that the name of the collision domain must not contain spaces (' '), underscores ('<strong>_</strong>'), commas ('<strong>,</strong>'), and dots ('<strong>.</strong>'), unless it is a ''<strong>tap</strong>'' collision domain - see <strong>vstart</strong>(1) for more information). For example, ''pc1[0]=CD1'' means that interface <strong>eth0</strong> of virtual machine <strong>pc1</strong> will be connected to collision domain <strong>CD1</strong>.<br />
The range of permitted network interfaces is configured inside the file <em>netkit.conf</em> (see <strong>netkit.conf</strong>(5))<br />
The special collision domain name ''<strong>tap</strong>'' is reserved, and can be used to connect a network interface to an external network (e.g., the Internet). See <strong>vstart</strong>(1) for more information about ''<strong>tap</strong>'' collision domains.</p>
</dd>
<dt>–</dt>
<dd><p>If <em>arg</em> is an option name, then <em>machine</em> will be launched with option <em>arg</em> set to value <em>value</em>. <em>arg</em> can be the name of any <strong>vstart</strong> option, being it short (e.g., <strong>-L</strong>) or long (e.g., <strong>--mem</strong>), without the leading dashes ('<strong>-</strong>'). If the option requires an argument, it can be passed by providing a <em>value</em>. For those options that do not require an argument (e.g., <strong>-H</strong>), <em>value</em> must be omitted.<br />
For example, ''pc1[mem]=64'' specifies that virtual machine <strong>pc1</strong> will be equipped with 64 MB of emulated memory, and ''pc1[D]='' tells <strong>vstart</strong> to hide the .disk file for virtual machine <strong>pc1</strong>.</p>
</dd>
</dl>
<p>The special assignment ''machines=<em>machine-list</em>'' can be used to explicitly define the set of virtual machines that are part of the lab. This also allows to start a virtual machine even if the corresponding subdirectory does not exist. <em>machine-list</em> is a space separated list of virtual machine names.</p>
<p>It is also possible to provide descriptive information about a lab by using one of the following special assignments:</p>
<dl>
<dt>–</dt>
<dd><p>LAB_DESCRIPTION=<em>string</em> (a brief description of the purpose of the lab)</p>
</dd>
<dt>–</dt>
<dd><p>LAB_VERSION=<em>string</em> (the version of the lab)</p>
</dd>
<dt>–</dt>
<dd><p>LAB_AUTHOR=<em>string</em> (people who have prepared the lab)</p>
</dd>
<dt>–</dt>
<dd><p>LAB_EMAIL=<em>string</em> (contacts of lab authors)</p>
</dd>
<dt>–</dt>
<dd><p>LAB_WEB=<em>string</em> (useful web reources related to the lab)</p>
</dd>
</dl>
<p>A line that does not match the above syntax is supposed to be a comment and is ignored by <em>lstart</em>. However, in order to establish a uniform convention, comment lines should always start with a hash character ('<strong>#</strong>').</p>
</blockquote>
<dl>
<dt><em><em>lab-path</em>/lab.dep</em></dt>
<dd><p>If such a file exists in the lab directory, then parallel startup (see <strong>lstart</strong>(1)) for that lab is automatically enabled, even if option <strong>-p</strong> is not used. Parallel startup allows to launch several virtual machines at once while still obeying some startup order rules. The file <em>lab.dep</em> contains dependency rules which tell <em>lstart</em> the order in which virtual machines should be started.</p>
</dd>
</dl>
<p><strong>Notice</strong>: in order to be able to use parallel startup, the <strong>make</strong> utility must be properly installed.</p>
<p>If you are familiar with Makefiles, <em>lab.dep</em> is simply a list of rules, where both targets and prerequisites are names of virtual machines.<br />
In particular, a rule inside <em>lab.dep</em> has the following syntax:</p>
<pre><code>   MACHINE: MACHINE1 MACHINE2 ...</code></pre>
<p>where MACHINE, MACHINE1, MACHINE2, ... are names of virtual machines. The rule states that MACHINE can only be started after MACHINE1, MACHINE2, ... have completed their boot. Notice that, it they are not dependent on each other, two (or more) virtual machines can also be started simultaneously. The maximum number of virtual machines that can be started simultaneously can be set by using the <strong>-p</strong> option of <em>lstart</em> or by configuring the value MAX_SIMULTANEOUS_VMS inside <em>netkit.conf</em> (see <strong>netkit.conf</strong>(5)).</p>
<p>Lines starting with a hash character ('<strong>#</strong>') are assumed to be comments and simply ignored.</p>
<dl>
<dt><em><em>lab-path</em>/<em>machine</em>/</em></dt>
<dd><p>Each subdirectory inside <em>lab-path</em> represents a virtual machine to be started, whose name will be the same as the one of the subdirectory.</p>
</dd>
</dl>
<p>Optionally, this subdirectory may contain files that you wish to make available (i.e., copy) inside the virtual machine filesystem. You can also put a full hierarchy of directories here. When organizing files inside <em>lab-path</em>/<em>machine</em>/, think of it as if it were the root ('<strong>/</strong>') directory of the virtual machine. For example, a file '<em>lab-path</em>/<em>machine</em>/foo' will be copied into '/foo' inside virtual machine <em>machine</em>.</p>
<p>In case of conflicts, files inside this subdirectory overwrite those inside <em>lab-path</em>/shared/.</p>
<dl>
<dt><em><em>lab-path</em>/<em>machine</em>.startup</em></dt>
<dd><p>This file is a shell script that will be launched during the startup of virtual machine <em>machine</em> after all the other initialization scripts have been executed. This file may be useful, for example, to automatically setup IP addresses for network interfaces. It is not required to assign this script the executable permission.<br />
Note that this script is always executed by using <strong>/bin/sh</strong> as interpreter. If you would like to run a boot-time script using a different interpreter, just invoke it inside <em>machine</em>.startup.</p>
</dd>
<dt><em><em>lab-path</em>/<em>machine</em>.shutdown</em></dt>
<dd><p>This file is a shell script that will be executed when virtual machine <em>machine</em> is either halted (not crashed) or rebooted. It is not required to assign this script the executable permission.<br />
Note that this script is always executed by using <strong>/bin/sh</strong> as interpreter. If you would like to run a halt-time script using a different interpreter, just invoke it inside <em>machine</em>.shutdown.</p>
</dd>
<dt><em><em>lab-path</em>/shared/ </em></dt>
<dd><p>This subdirectory may contain files and directories that you want to make available (i.e., copy) inside every virtual machine filesystem. Files should be organized so that <em>lab-path</em>/shared/ corresponds to the root ('<strong>/</strong>') directory of the virtual machines.</p>
</dd>
</dl>
<p>In case of conflicts, files inside this subdirectory are overwritten by those inside <em>lab-path</em>/<em>machine</em>/.</p>
<dl>
<dt><em><em>lab-path</em>/shared.startup</em></dt>
<dd><p>This is a shell script that will be run on every virtual machine just before <em>lab-path</em>/<em>machine</em>.startup. It is not required to assign this script the executable permission.<br />
Note that this script is always executed by using <strong>/bin/sh</strong> as interpreter. If you would like to run a boot-time script using a different interpreter, just invoke it inside <em>shared.startup</em>.</p>
</dd>
<dt><em><em>lab-path</em>/shared.shutdown</em></dt>
<dd><p>This is a shell script that will be run on every virtual machine just after <em>lab-path</em>/<em>machine</em>.shutdown. It is not required to assign this script the executable permission.<br />
Note that this script is always executed by using <strong>/bin/sh</strong> as interpreter. If you would like to run a halt-time script using a different interpreter, just invoke it inside <em>shared.shutdown</em>.</p>
</dd>
<dt><em><em>lab-path</em>/_test/</em></dt>
<dd><p>This subdirectory contains information for performing a test of the lab. It may be automatically created by <strong>ltest</strong> or may contain user created files describing customized tests. For more information about this directory, see <strong>ltest</strong>(1).</p>
</dd>
</dl>
<h1>HOW TO INFLUENCE THE STARTUP ORDER OF VIRTUAL MACHINES</h1>
<p>Virtual machines are usually launched in arbitrary order. However, there are several ways of influencing the order in which they are started up.</p>
<dl>
<dt>–</dt>
<dd><p>The first way is to insert a ''machines=<em>machine-list</em>'' assignment inside <em>lab.conf</em>. If such an assignment exists, <em>lstart</em> launches virtual machines in the same order in which they appear in the <em>machine-list</em>.</p>
</dd>
<dt>–</dt>
<dd><p>Another possibility is to provide a list of <em>MACHINE-NAME</em>s as argument to <em>lstart</em>. This ensures that virtual machines are started in the same order in which they are listed on the <em>lstart</em> command line. This method overrides ordering information obtained from <em>lab.conf</em>.</p>
</dd>
<dt>–</dt>
<dd><p>It is also possible to use a <em>lab.dep</em> file. This would have the twofold benefit of allowing multiple virtual machines to start up simultaneously while still preserving a partial ordering among them. This method overrides ordering information passed by command line arguments.</p>
</dd>
</dl>
<h1>EXAMPLES</h1>
<p>The following one is a simple example of a Netkit lab, stored inside the directory '/home/foo/lab'.</p>
<p>The directory contents are the following:</p>
<blockquote>
<pre><code>lab/
|
+- lab.conf
+- lab.dep
+- pc1/
+- pc2/
+- pc3/
\- router/
   |
   \- etc/
      |
      \- zebra/
         |
         \- bgpd.conf</code></pre>
</blockquote>
<p>The file lab.conf is made up as follows:</p>
<blockquote>
<pre><code>machines=&quot;pc1 pc2 router&quot;
pc1[0]=CD1
pc2[0]=CD2
router[0]=CD1
router[1]=CD2
pc1[mem]=64
router[mem]=128</code></pre>
</blockquote>
<p>The file lab.dep is made up as follows:</p>
<blockquote>
<pre><code>pc2: router pc1</code></pre>
</blockquote>
<p>This lab implements the following network topology, where <strong>CD1</strong> and <strong>CD2</strong> are collision domains:</p>
<blockquote>
<pre><code>   eth0   eth0    eth1   eth0
+---+       +------+       +---+
|pc1+-------+router+-------+pc2|
+---+  CD1  +------+  CD2  +---+
64 MB        128 MB</code></pre>
</blockquote>
<p>The lab is extremely simple: there are no automatically configured network interfaces or services. There is only a simple configuration file for the BGP routing daemon (bgpd) that is automatically deployed inside virtual machine <strong>router</strong> under '/etc/zebra/bgpd.conf'.</p>
<p>Assuming the current directory is '/home/foo', it is now possible to launch the lab by issuing the command:</p>
<blockquote>
<pre><code>lstart -d lab/</code></pre>
</blockquote>
<p>Since a lab.dep file has been created, this lab supports parallel startup. Because of the contents of the lab.dep file, <strong>router</strong> and <strong>pc1</strong> will be started simultaneously, while <strong>pc2</strong> will only be launched after they have completed their boot phase.</p>
<p>Notice that, even if there exists a subdirectory '/home/foo/lab/pc3/', the corresponding machine is not actually started. This happens because lab.conf contains an entry (the 'machines=' assignment) stating that <strong>pc3</strong> does not belong to the lab.</p>
<h1>NOTES</h1>
<p>A Netkit lab is essentially a set of configuration files. Virtual machines filesystems (.disk files) do not provide additional data or information (except in very particular situations). Hence, when a Netkit lab is prepared for redistribution, make sure that virtual machines filesystems (.disk files) have been removed before creating the package. To this purpose, you can use the <strong>lclean</strong>(1) tool. Failure to do this would result in a useless waste of space.</p>
<p>Users who are preparing their labs inside an operating system that is different from Linux may experience problems due to differences in line break conventions. In particular, Windows applications usually mark line breaks in text files with a sequence of CR+NL characters, while in Linux they only consist of a single NL. Using lab configuration files that have been processed inside some Windows editor may cause problems. In such a case, we recommend to use a standard conversion utility such as <strong>flip</strong>(1) on the affected files before using them.</p>
<h1>SEE ALSO</h1>
<p><em>flip</em>(1), <em>lclean</em>(1), <em>lstart</em>(1), <em>vstart</em>(1).</p>
<h1>AUTHOR</h1>
<p>This man page: Massimo Rimondini</p>
`

const html = ReactHtmlParser(raw);
export default html;
