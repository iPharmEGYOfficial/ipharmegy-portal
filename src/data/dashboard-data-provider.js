import summary from "./smart-pharmacy-summary.json";

export function getDashboardData(){

  return {

    summary:{
      sales: summary.sales.total.toLocaleString(),
      profit: summary.sales.profit.toLocaleString(),
      expired: summary.expiry.expired,
      expiringSoon: summary.expiry.expiring30 + summary.expiry.expiring90,
      reorder: summary.reorder.count,
      velocity: summary.velocity.items + " items"
    },

    expiryAlerts:[
      summary.expiry.expired + " expired tracked batches",
      summary.expiry.expiring30 + " batches expiring within 30 days",
      summary.expiry.expiring90 + " batches expiring within 90 days"
    ],

    salesIntelligence:[
      "Total sales rows: " + summary.sales.rows,
      "Velocity scope: " + summary.velocity.items + " items",
      "Normal moving items: " + summary.velocity.normal
    ],

    velocityIntelligence:[
      summary.velocity.fast + " fast-moving items",
      summary.velocity.normal + " normal-moving items",
      summary.velocity.slow + " slow-moving items"
    ],

    systemStatus:[
      "Portal UI active",
      "Inventory Intelligence active",
      "POS Intelligence active",
      "Smart Pharmacy Engine active"
    ]

  }

}
