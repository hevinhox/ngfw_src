Ext.define('Ung.view.shd.Sessions', {
    extend: 'Ext.panel.Panel',
    // extend: 'Ext.grid.Panel',
    xtype: 'ung.sessions',
    // layout: 'border',
    requires: [
        'Ung.view.shd.SessionsController'
    ],

    controller: 'sessions',

    viewModel: {
        data: {
            autoRefresh: false
        }
    },

    layout: 'border',

    defaults: {
        border: false
    },

    title: 'Current Sessions'.t(),

    items: [{
        region: 'center',
        xtype: 'grid',
        itemId: 'list',
        store: 'sessions',
        // forceFit: true,

        plugins: 'gridfilters',
        columnLines: true,
        columns: [{
            header: 'Creation Time'.t(),
            dataIndex: 'creationTime',
            hidden: true
        }, {
            header: 'Protocol'.t(),
            dataIndex: 'protocol',
            width: 70,
            filter: {
                type: 'list',
                options: ['TCP', 'UDP']
            }
        }, {
            header: 'Bypassed'.t(),
            dataIndex: 'bypassed',
            width: 70
        }, {
            header: 'Policy'.t(),
            dataIndex: 'policy',
            hidden: true
        }, {
            header: 'Hostname'.t(),
            dataIndex: 'platform-hostname',
            flex: 1
        }, {
            header: 'NATd'.t(),
            dataIndex: 'natted',
            hidden: true
        }, {
            header: 'Port Forwarded'.t(),
            dataIndex: 'portForwarded',
            hidden: true
        }, {
            header: 'Username'.t(),
            dataIndex: 'platform-username',
            hidden: true
        }, {
            header: 'Client'.t(),
            columns: [{
                header: 'Interface'.t(),
                dataIndex: 'clientIntf'
            }, {
                header: 'Pre-NAT'.t(),
                dataIndex: 'preNatClient'
            }, {
                header: 'Port (Pre-NAT)'.t(),
                dataIndex: 'preNatClientPort'
            }, {
                header: 'Post-NAT'.t(),
                dataIndex: 'postNatClient',
                hidden: true
            }, {
                header: 'Port (Post-NAT)'.t(),
                dataIndex: 'postNatClientPort',
                hidden: true
            }, {
                header: 'Country'.t(),
                dataIndex: 'clientCountry',
                hidden: true
            }, {
                header: 'Latitude'.t(),
                dataIndex: 'clientLatitude',
                hidden: true
            }, {
                header: 'Longitude'.t(),
                dataIndex: 'clientLlongitude',
                hidden: true
            }]
        }, {
            header: 'Server'.t(),
            columns: [{
                header: 'Interface'.t(),
                dataIndex: 'serverIntf'
            }, {
                header: 'Pre-NAT'.t(),
                dataIndex: 'preNatServer',
                hidden: true
            }, {
                header: 'Port (Pre-NAT)'.t(),
                dataIndex: 'preNatServerPort',
                hidden: true
            }, {
                header: 'Post-NAT'.t(),
                dataIndex: 'postNatServer'
            }, {
                header: 'Port (Post-NAT)'.t(),
                dataIndex: 'postNatServerPort'
            }, {
                header: 'Country'.t(),
                dataIndex: 'serverCountry',
                hidden: true
            }, {
                header: 'Latitude'.t(),
                dataIndex: 'serverLatitude',
                hidden: true
            }, {
                header: 'Longitude'.t(),
                dataIndex: 'serverLlongitude',
                hidden: true
            }]
        }, {
            header: 'Speed (KB/s)'.t(),
            columns: [{
                header: 'Client'.t(),
                dataIndex: 'clientKBps',
                filter: 'number',
                align: 'right'
            }, {
                header: 'Server'.t(),
                dataIndex: 'serverKBps',
                filter: 'number',
                align: 'right'
            }, {
                header: 'Total'.t(),
                dataIndex: 'totalKBps',
                filter: 'number',
                align: 'right'
            }]
        }]
    }, {
        region: 'east',
        xtype: 'propertygrid',
        itemId: 'details',
        editable: false,
        width: 400,
        title: 'Session Details'.t(),
        split: true,
        collapsible: true,
        resizable: true,
        shadow: false,
        animCollapse: false,
        titleCollapse: true,

        // columnLines: false,

        cls: 'prop-grid',

        viewConfig: {
            stripeRows: false,
            getRowClass: function(record) {
                if (record.get('value') === null || record.get('value') === '') {
                    return 'empty';
                }
                return;
            }
        },

        nameColumnWidth: 150,
        bind: {
            source: '{selectedSession}'
        },
        sourceConfig: {
            attachments:       { displayName: 'Attachments'.t() },
            bypassed:          { displayName: 'Bypassed'.t() },
            clientCountry:     { displayName: 'Client Country'.t() },
            clientIntf:        { displayName: 'Client Interface'.t() },
            clientKBps:        { displayName: 'Client KB/s'.t() },
            clientLatitude:    { displayName: 'Client Latitude'.t() },
            clientLongitude:   { displayName: 'Client Longitude'.t() },
            creationTime:      { displayName: 'Creation Time'.t() },
            hostname:          { displayName: 'Hostname'.t() },
            natted:            { displayName: 'NATd'.t() },
            pipeline:          { displayName: 'Pipeline'.t() },
            policy:            { displayName: 'Policy'.t() },
            portForwarded:     { displayName: 'Port Forwarded'.t() },
            postNatClient:     { displayName: 'Client (Post-NAT)'.t() },
            postNatClientPort: { displayName: 'Client Port (Post-NAT)'.t() },
            postNatServer:     { displayName: 'Server (Post-NAT)'.t() },
            postNatServerPort: { displayName: 'Server Port (Post-NAT)'.t() },
            preNatClient:      { displayName: 'Client (Pre-NAT)'.t() },
            preNatClientPort:  { displayName: 'Client Port (Pre-NAT)'.t() },
            preNatServer:      { displayName: 'Server (Pre-NAT)'.t() },
            preNatServerPort:  { displayName: 'Server Port (Pre-NAT)'.t() },
            priority:          { displayName: 'Priority'.t() },
            protocol:          { displayName: 'Protocol'.t() },
            qosPriority:       { displayName: 'Priority'.t() + '(QoS)' },
            serverCountry:     { displayName: 'Server Country'.t() },
            serverIntf:        { displayName: 'Server Interface'.t() },
            serverKBps:        { displayName: 'Server KB/s'.t() },
            serverLatitude:    { displayName: 'Server Latitude'.t() },
            serverLongitude:   { displayName: 'Server Longitude'.t() },
            sessionId:         { displayName: 'Session ID'.t() },
            state:             { displayName: 'State'.t() },
            totalKBps:         { displayName: 'Total KB/s'.t() }
        },
        listeners: {
            beforeedit: function () {
                return false;
            }
        }
    }],
    tbar: [{
        xtype: 'button',
        text: Ung.Util.iconTitle('Refresh'.t(), 'refresh-16'),
        handler: 'getSessions',
        bind: {
            disabled: '{autoRefresh}'
        }
    }, {
        xtype: 'button',
        text: Ung.Util.iconTitle('Auto Refresh'.t(), 'autorenew-16'),
        enableToggle: true,
        toggleHandler: 'setAutoRefresh'
    }, '-', 'Filter:'.t(), {
        xtype: 'textfield',
        checkChangeBuffer: 200
    }]
});