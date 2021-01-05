module.exports = {
  someSidebar: {
    'Netkit': ['installation', 'introduction'],
    'Development': [
        'dev/gettingstarted',
        'dev/featuresinprogress',
        'dev/currentbugs',
        {
            'Guides': [
                'dev/guides/debianbuild',
                'dev/guides/dockerbuild',
                'dev/guides/tcpdump',
                'dev/guides/fspackages',
                'dev/guides/kernelpatches',
                'dev/guides/creatingtests',
                'dev/guides/addingnewconfigs'],
        }
    ],
    'Manpages': [
        {
            'vm commands': [
                'man/netkit-manpage-vclean',
                'man/netkit-manpage-vcommand',
                'man/netkit-manpage-vconfig',
                'man/netkit-manpage-vconnect',
                'man/netkit-manpage-vcrash',
                'man/netkit-manpage-vdump',
                'man/netkit-manpage-vhalt',
                'man/netkit-manpage-vlist',
                'man/netkit-manpage-vstart',
            ],
        },
        {
            'lab commands': [
                'man/netkit-manpage-lclean',
                'man/netkit-manpage-lcrash',
                'man/netkit-manpage-lhalt',
                'man/netkit-manpage-linfo',
                'man/netkit-manpage-lrestart',
                'man/netkit-manpage-lstart',
                'man/netkit-manpage-ltest',
            ],
        },
        'man/netkit-manpage-lab.conf',
        'man/netkit-manpage-lab.dep',
        'man/netkit-manpage-netkit.conf',
        'man/netkit-manpage-netkit',
    ],
  },
};
