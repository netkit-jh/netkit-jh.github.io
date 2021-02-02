import ReactHtmlParser from 'react-html-parser';

const raw = `
<h1>NAME</h1>
<p>lstart - start a netkit lab</p>
<h1>SYNOPSIS</h1>
<p><strong>lstart</strong> [options] [<em>MACHINE-NAME</em>...]</p>
<p><strong>lrestart</strong> [options] [<em>MACHINE-NAME</em>...]</p>
<h1>DESCRIPTION</h1>
<p>In order to ease setting up complex network experiences with Netkit it is possible to completely describe them into special configuration files, so that the experience can later be started with a single command as if it were a virtual network ''laboratory''.</p>
<p>The <em>lstart</em> command can be used to achieve this purpose. In particular, it starts a set of virtual machines that are part of a Netkit lab and configures them according to the parameters contained in the lab description. There is no difference between <em>lstart</em> and <em>lrestart</em>. The latter is just provided for backward compatibility.<br />
By default, all the virtual machines that make up the lab are started. If a list of <em>MACHINE-NAME</em>s is provided, then only virtual machines with a matching name <em>and</em> that are part of the lab are started.</p>
<p>The configuration of a Netkit lab consists of some files and directories whose names, locations and contents are described in the page <strong>lab.conf</strong>(5).</p>
<p>The following options are supported by <em>lstart</em>:</p>
<dl>
<dt><strong>-d <em>DIRECTORY</em></strong></dt>
<dd><p>Start the Netkit lab that is located inside <em>DIRECTORY</em>. If no <strong>-d</strong> option is provided, <em>lstart</em> assumes that the lab is located in the current directory. The path to the lab directory (being that the current directory or one provided by <strong>-d</strong>) must never contain spaces.</p>
</dd>
</dl>
<p>Note that, in order to avoid starting undesired virtual machines, <em>lstart</em> checks whether the current directory (or the directory specified with <strong>-d</strong>) contains at least a ''lab.conf'' or a ''lab.dep'' file, and refuses to start the lab if none of these file exists. See option <strong>-F</strong> below for disabling this behavior.</p>
<dl>
<dt><strong>-F</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--force-lab</strong></dt>
<dd><p>As a native behaviour, Netkit starts a virtual machine for each directory that it finds in a designed path, by default the current directory. In order to prevent the user from accidentally starting random virtual machines from a directory that does not contain a lab, lstart requires the presence of at least a ''lab.conf'' or a ''lab.dep'' file in the affected directory. If these files are not required for your setting, and you still want to launch your lab without creating either one, you can use option <strong>-F</strong> or</p>
</dd>
</dl>
<p><strong>--force-lab</strong></p>
<p>to convince Netkit that a certain directory is indeed a lab.</p>
<dl>
<dt><strong>-f</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--fast</strong></dt>
<dd><p><em>lstart</em> always waits for a virtual machine to complete its boot phase before launching the next one. This option disables this behaviour, and allows to launch several virtual machines at once.<br />
This option has no effect if parallel startup is being used and is not impacted by the <strong>-p</strong> option.</p>
</dd>
</dl>
<dl>
<dt><strong>--tmux-attached</strong></dt>
<dd><p>Run each VM in a tmux session and start a terminal attached to this tmux session. This is the same as setting USE_TMUX=TRUE and TMUX_OPEN_TERMS=TRUE in netkit.conf</p>
</dd>
</dl>
<dl>
<dt><strong>--tmux-detached</strong></dt>
<dd><p>Run each VM in a tmux session without opening any terminals. This is the same as setting USE_TMUX=TRUE and TMUX_OPEN_TERMS=FALSE in netkit.conf</p>
</dd>
<dt><strong>-l</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--list</strong></dt>
<dd><p>Show a list of currently running virtual machines after the lab has been started up. This is useful to check whether all the hosts are up and running. Notice that, when the <strong>-f</strong> (or <strong>--fast</strong>) option is being used, <em>lstart</em> does not wait for all the virtual machines of the lab to start up before printing this list, resulting in a possibly incomplete report. Hence, it is advised not to use <strong>-l</strong> (or <strong>--list</strong>) together with <strong>-f</strong> (or <strong>--fast</strong>).</p>
</dd>
<dt><strong>-o <em>OPTION</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--pass=<em>OPTION</em></strong></dt>
<dd><p><em>lstart</em> acts as a frontend to <strong>vstart</strong> (see <strong>vstart</strong>(1)). This option allows to pass an <em>OPTION</em> unaltered to every invocation of <strong>vstart</strong>. This means that all the virtual machines of the lab will be launched with option <em>OPTION</em>. <em>OPTION</em> should be specified exactly as it would be on the <strong>vstart</strong> command line, but always make sure that space characters are quoted (e.g., '-fdummy.disk' or '--append=debug' are ok, '-M 32' should be written as either '-M32' or '"-M 32"').</p>
</dd>
<dt><strong>-p[<em>VALUE</em><strong>]</strong></strong></dt>
<dd><p>Parallel startup is a special startup mode that allows to simultaneously boot several virtual machines. It is automatically enabled whenever a 'lab.dep' file is found to exist inside the lab directory. This option forces parallel startup, even if the 'lab.dep' file does not exist. In order to limit the load on your host, this option also allows to set a maximum number of virtual machines that at any time instant can be simultaneously booting. <em>VALUE</em> must be a positive integer. A <em>VALUE</em> of 0 corresponds to setting no limit. If no VALUE is provided, the default configured inside <em>netkit.conf</em> is assumed (see <strong>netkit.conf</strong>(5)).<br />
This option conflicts with <strong>-s</strong> (or <strong>--sequential</strong>).</p>
</dd>
</dl>
<p>This option overrides the default value of MAX_SIMULTANEOUS_VMS inside <em>netkit.conf</em> (see <strong>netkit.conf</strong>(5)).</p>
<p><strong>Notice</strong>: parallel startup requires that the <strong>make</strong> utility is properly installed on your system.</p>
<dl>
<dt><strong>-s</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--sequential</strong></dt>
<dd><p>Disable parallel startup, even if a 'lab.dep' file is found to exist in the lab directory. This option is useful when you just want to launch specific virtual machines. In fact, if you just provide their <em>MACHINE-NAME</em>s on the command line, <em>lstart</em> would still attempt to satisfy the dependencies, and this may result in starting other undesired virtual machines.<br />
This option cannot be used together with <strong>-p</strong>.</p>
</dd>
<dt><strong>-w <em>SECONDS</em></strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--wait=<em>SECONDS</em></strong></dt>
<dd><p>Wait for the specified amount of time before launching the next virtual machine. This option is always enforced, but it just becomes handy (for example, to reduce the load on the host machine) when using either <strong>-f</strong> (or <strong>--fast</strong>) or parallel startup.</p>
</dd>
</dl>
<p>This option overrides the default value of GRACE_TIME inside <em>netkit.conf</em> (see <strong>netkit.conf</strong>(5)).</p>
<p>The following standard options are also supported.</p>
<dl>
<dt><strong>-h</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--help</strong></dt>
<dd><p>Show usage information.</p>
</dd>
<dt><strong>-v</strong></dt>
<dd>
</dd>
</dl>
<dl>
<dt><strong>--verbose</strong></dt>
<dd><p>Show details about virtual machines while starting them.</p>
</dd>
<dt><strong>--version</strong></dt>
<dd><p>Print information about the installed Netkit release and the host kernel version and exit. If ''<em>&lt;unavailable&gt;</em>'' is printed instead of a version number, then the corresponding information could not be retrieved (for example because a non-standard Netkit kernel or filesystem is being used).</p>
</dd>
</dl>
<h1>FILES</h1>
<p>Apart from the lab configuration files, running a lab requires creating some temporary files inside the current directory (i.e., the one the <em>lstart</em> command is executed from) as well as inside the lab directory. Such files are:</p>
<dl>
<dt><em>./<em>machine</em>.ready</em></dt>
<dd><p>These files are created by <em>lstart</em> and are used to synchronize virtual machines when they are started. These files are automatically deleted when all the machines in the lab have properly started up. Yet, sometimes (e.g., when a virtual machine crashes in the boot phase) there may be '.ready' files left in the current directory even after the lab has been stopped. In this case you have to launch <strong>lclean</strong> (see <strong>lclean</strong>(1)) to get rid of them before the lab can be restarted.</p>
</dd>
<dt><em>./<em>machine</em>.disk</em></dt>
<dd><p>This is the COW filesystem for virtual machine <em>machine</em>. These files are automatically removed when the lab is crashed with <strong>lcrash</strong> (see <strong>lcrash</strong>(1)), so that virtual machines can revert to their original state when the lab is restarted. If you want to preserve .disk files, use the <strong>-F</strong> (or <strong>--keep-fs</strong>) option of <strong>lcrash</strong>. On the other hand, <strong>lhalt</strong>(1) (see <strong>lhalt</strong>(1)) never removes .disk files, unless explicitly told to do it (with the <strong>-r</strong> or <strong>--remove-fs</strong> option).</p>
</dd>
</dl>
<p>See the README in the Netkit filesystem package for more information about COW filesystems.</p>
<dl>
<dt><em><em>lab-path</em>/readyfor.test</em></dt>
<dd><p>This file is automatically created by <strong>ltest</strong> (see <strong>ltest</strong>(1)). It is used to ensure that the status of running virtual machines is only retrieved when they have all completed their boot phase.</p>
</dd>
</dl>
<h1>NOTES</h1>
<p><em>lstart</em> is essentially a wrapper for <strong>vstart</strong>. Hence, if something goes wrong, try to investigate the parameters used in the invocation of <strong>vstart</strong> (they are reported in the <em>lstart</em> output) and read the <strong>vstart</strong>(1) documentation.</p>
<h1>SEE ALSO</h1>
<p><em>lab.conf</em>(5), <em>lclean</em>(1), <em>lhalt</em>(1), <em>lcrash</em>(1), <em>linfo</em>(1), <em>ltest</em>(1), <em>make</em>(1), <em>vstart</em>(1), <em>netkit.conf</em>(5), Netkit filesystem README.</p>
<h1>AUTHOR</h1>
<p><em>lstart</em> script: Stefano Pettini, Fabio Ricci, Massimo Rimondini<br />
This man page: Fabio Ricci, Massimo Rimondini</p>
<h1>REPORTING BUGS</h1>
<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>
<p>Please follow the recommended templates when reporting bugs.</p>
`

const html = ReactHtmlParser(raw);
export default html;
