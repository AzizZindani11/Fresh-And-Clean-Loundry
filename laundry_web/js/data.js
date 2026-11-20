/**
 * Fresh & Clean Laundry — Sistem Informasi Manajemen Laundry
 * Data Store & LocalStorage Persistence Manager
 */

const STORAGE_KEY = 'fresh_clean_laundry_mis_v3';

const formatDateISO = (daysOffset = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatDateTimeISO = (daysOffset = 0, hours = 10, minutes = 15) => {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  d.setHours(hours, minutes, 0, 0);
  return d.toISOString();
};

/**
 * Konfigurasi Paket & Tarif Awal Sesuai Spesifikasi:
 * A. Cuci Setrika: 8 Jam (Rp15.000/kg), 1 Hari (Rp10.000/kg), 2 Hari (Rp9.000/kg), 3 Hari (Rp8.000/kg)
 * B. Cuci Kering: 8 Jam (Rp8.000/kg), 1 Hari (Rp7.000/kg), 2 Hari (Rp6.000/kg)
 * C. Paket Setrika: 8 Jam (Rp8.000/kg), 1 Hari (Rp6.000/kg), 2 Hari (Rp4.000/kg)
 * D. Dryer / Pengering: 8 Jam (Rp7.000/kg), 1 Hari (Rp5.000/kg)
 *
 * Catatan: minWeight disetel 0 secara default agar berat desimal seperti 1.0 kg, 1.4 kg, 2.5 kg, dan 3.5 kg
 * langsung dihitung dengan rumus: Total = Berat Aktual × Harga per kg (contoh: 1.4 kg × Rp8.000 = Rp11.200).
 * Admin tetap dapat mengatur batas minimum per paket melalui menu Paket & Tarif jika diperlukan.
 */
const INITIAL_DEMO_DATA = {
  settings: {
    businessName: 'Fresh & Clean Laundry',
    description: 'Layanan cuci setrika, cuci kering, setrika, dan pengeringan pakaian.',
    adminName: 'admin 123',
    adminRole: 'Admin & Kasir',
    phone: '0812-3456-7890',
    address: 'Jl. Tirta Samudra No. 48, Jakarta Selatan',
    operatingHours: 'Senin – Minggu: 07.00 – 21.00 WIB',
    receiptFooter: 'Terima kasih telah menggunakan layanan Fresh & Clean Laundry. Harap simpan struk ini sebagai bukti pengambilan cucian.'
  },

  expenseCategories: [
    'Detergen',
    'Pewangi',
    'Pelembut',
    'Listrik',
    'Air',
    'Perawatan Mesin',
    'Lainnya'
  ],

  packages: [
    {
      id: 'PKT-A',
      name: 'Cuci Setrika',
      description: 'Layanan pencucian pakaian hingga bersih, pengeringan, dan penyetrikaan rapi siap pakai.',
      unit: 'kg',
      minWeight: 0,
      active: true,
      durations: [
        { id: 'DUR-A1', label: '8 Jam', hours: 8, price: 15000 },
        { id: 'DUR-A2', label: '1 Hari', hours: 24, price: 10000 },
        { id: 'DUR-A3', label: '2 Hari', hours: 48, price: 9000 },
        { id: 'DUR-A4', label: '3 Hari', hours: 72, price: 8000 }
      ]
    },
    {
      id: 'PKT-B',
      name: 'Cuci Kering',
      description: 'Layanan pencucian pakaian dan pengeringan mesin serta lipat rapi tanpa setrika.',
      unit: 'kg',
      minWeight: 0,
      active: true,
      durations: [
        { id: 'DUR-B1', label: '8 Jam', hours: 8, price: 8000 },
        { id: 'DUR-B2', label: '1 Hari', hours: 24, price: 7000 },
        { id: 'DUR-B3', label: '2 Hari', hours: 48, price: 6000 }
      ]
    },
    {
      id: 'PKT-C',
      name: 'Paket Setrika',
      description: 'Layanan penyetrikaan rapi dan pelipatan untuk pakaian yang sudah dicuci.',
      unit: 'kg',
      minWeight: 0,
      active: true,
      durations: [
        { id: 'DUR-C1', label: '8 Jam', hours: 8, price: 8000 },
        { id: 'DUR-C2', label: '1 Hari', hours: 24, price: 6000 },
        { id: 'DUR-C3', label: '2 Hari', hours: 48, price: 4000 }
      ]
    },
    {
      id: 'PKT-D',
      name: 'Dryer / Pengering',
      description: 'Layanan pengeringan pakaian menggunakan mesin pengering (dryer).',
      unit: 'kg',
      minWeight: 0,
      active: true,
      durations: [
        { id: 'DUR-D1', label: '8 Jam', hours: 8, price: 7000 },
        { id: 'DUR-D2', label: '1 Hari', hours: 24, price: 5000 }
      ]
    }
  ],

  customers: [
    { id: 'PLG-101', name: 'Budi Santoso', phone: '081298765432', notes: 'Lipatan kemeja dipisah.' },
    { id: 'PLG-102', name: 'Siti Aminah', phone: '081345678901', notes: 'Pelanggan rutin mingguan.' },
    { id: 'PLG-103', name: 'Andi Pratama', phone: '085712340987', notes: 'Sering menggunakan layanan 8 jam.' },
    { id: 'PLG-104', name: 'Dewi Lestari', phone: '081122334455', notes: 'Pakaian keluarga.' },
    { id: 'PLG-105', name: 'Hendra Wijaya', phone: '087855667788', notes: 'Pakaian kerja harian.' },
    { id: 'PLG-106', name: 'Nadia Putri', phone: '082199887766', notes: 'Kamar Kos No. 12.' }
  ],

  transactions: [
    {
      id: 'TRX-261101',
      customerId: 'PLG-103',
      customerName: 'Andi Pratama',
      customerPhone: '085712340987',
      packageId: 'PKT-A',
      packageName: 'Cuci Setrika',
      durationLabel: '1 Hari',
      durationHours: 24,
      unit: 'kg',
      actualWeight: 3.5,
      chargeableWeight: 3.5,
      minWeightApplied: false,
      itemCount: 12,
      pricePerUnit: 10000,
      baseSubtotal: 35000,
      discount: 0,
      totalPrice: 35000,
      amountPaid: 35000,
      remainingBalance: 0,
      paymentStatus: 'Lunas',
      laundryStatus: 'Siap Diambil',
      transactionDate: formatDateISO(0),
      estimatedDate: formatDateISO(1),
      createdAt: formatDateTimeISO(0, 8, 30),
      notes: 'Kemeja kerja 4 potong disetrika rapi.'
    },
    {
      id: 'TRX-261102',
      customerId: 'PLG-101',
      customerName: 'Budi Santoso',
      customerPhone: '081298765432',
      packageId: 'PKT-A',
      packageName: 'Cuci Setrika',
      durationLabel: '1 Hari',
      durationHours: 24,
      unit: 'kg',
      actualWeight: 4.0,
      chargeableWeight: 4.0,
      minWeightApplied: false,
      itemCount: 15,
      pricePerUnit: 10000,
      baseSubtotal: 40000,
      discount: 0,
      totalPrice: 40000,
      amountPaid: 20000,
      remainingBalance: 20000,
      paymentStatus: 'Sebagian Dibayar',
      laundryStatus: 'Diproses',
      transactionDate: formatDateISO(0),
      estimatedDate: formatDateISO(1),
      createdAt: formatDateTimeISO(0, 9, 45),
      notes: 'DP Rp20.000, sisa pembayaran saat pengambilan.'
    },
    {
      id: 'TRX-261103',
      customerId: 'PLG-106',
      customerName: 'Nadia Putri',
      customerPhone: '082199887766',
      packageId: 'PKT-B',
      packageName: 'Cuci Kering',
      durationLabel: '8 Jam',
      durationHours: 8,
      unit: 'kg',
      actualWeight: 1.4,
      chargeableWeight: 1.4,
      minWeightApplied: false,
      itemCount: 6,
      pricePerUnit: 8000,
      baseSubtotal: 11200,
      discount: 0,
      totalPrice: 11200,
      amountPaid: 0,
      remainingBalance: 11200,
      paymentStatus: 'Belum Dibayar',
      laundryStatus: 'Diterima',
      transactionDate: formatDateISO(0),
      estimatedDate: formatDateISO(0),
      createdAt: formatDateTimeISO(0, 10, 20),
      notes: 'Pakaian harian 1,4 kg.'
    },
    {
      id: 'TRX-261104',
      customerId: 'PLG-102',
      customerName: 'Siti Aminah',
      customerPhone: '081345678901',
      packageId: 'PKT-A',
      packageName: 'Cuci Setrika',
      durationLabel: '3 Hari',
      durationHours: 72,
      unit: 'kg',
      actualWeight: 2.5,
      chargeableWeight: 2.5,
      minWeightApplied: false,
      itemCount: 10,
      pricePerUnit: 8000,
      baseSubtotal: 20000,
      discount: 0,
      totalPrice: 20000,
      amountPaid: 20000,
      remainingBalance: 0,
      paymentStatus: 'Lunas',
      laundryStatus: 'Siap Diambil',
      transactionDate: formatDateISO(-1),
      estimatedDate: formatDateISO(2),
      createdAt: formatDateTimeISO(-1, 14, 10),
      notes: 'Pakaian rumah tangga.'
    },
    {
      id: 'TRX-261105',
      customerId: 'PLG-104',
      customerName: 'Dewi Lestari',
      customerPhone: '081122334455',
      packageId: 'PKT-C',
      packageName: 'Paket Setrika',
      durationLabel: '1 Hari',
      durationHours: 24,
      unit: 'kg',
      actualWeight: 5.25,
      chargeableWeight: 5.25,
      minWeightApplied: false,
      itemCount: 19,
      pricePerUnit: 6000,
      baseSubtotal: 31500,
      discount: 0,
      totalPrice: 31500,
      amountPaid: 31500,
      remainingBalance: 0,
      paymentStatus: 'Lunas',
      laundryStatus: 'Selesai',
      transactionDate: formatDateISO(-1),
      estimatedDate: formatDateISO(0),
      createdAt: formatDateTimeISO(-1, 11, 0),
      notes: 'Sudah diambil pelanggan.'
    },
    {
      id: 'TRX-261106',
      customerId: 'PLG-105',
      customerName: 'Hendra Wijaya',
      customerPhone: '087855667788',
      packageId: 'PKT-D',
      packageName: 'Dryer / Pengering',
      durationLabel: '8 Jam',
      durationHours: 8,
      unit: 'kg',
      actualWeight: 4.0,
      chargeableWeight: 4.0,
      minWeightApplied: false,
      itemCount: 12,
      pricePerUnit: 7000,
      baseSubtotal: 28000,
      discount: 0,
      totalPrice: 28000,
      amountPaid: 28000,
      remainingBalance: 0,
      paymentStatus: 'Lunas',
      laundryStatus: 'Selesai',
      transactionDate: formatDateISO(-2),
      estimatedDate: formatDateISO(-2),
      createdAt: formatDateTimeISO(-2, 9, 15),
      notes: 'Pengeringan cepat.'
    },
    {
      id: 'TRX-261107',
      customerId: 'PLG-101',
      customerName: 'Budi Santoso',
      customerPhone: '081298765432',
      packageId: 'PKT-A',
      packageName: 'Cuci Setrika',
      durationLabel: '8 Jam',
      durationHours: 8,
      unit: 'kg',
      actualWeight: 5.0,
      chargeableWeight: 5.0,
      minWeightApplied: false,
      itemCount: 18,
      pricePerUnit: 15000,
      baseSubtotal: 75000,
      discount: 0,
      totalPrice: 75000,
      amountPaid: 75000,
      remainingBalance: 0,
      paymentStatus: 'Lunas',
      laundryStatus: 'Selesai',
      transactionDate: formatDateISO(-3),
      estimatedDate: formatDateISO(-3),
      createdAt: formatDateTimeISO(-3, 16, 0),
      notes: 'Paket kilat 8 jam.'
    },
    {
      id: 'TRX-261108',
      customerId: 'PLG-102',
      customerName: 'Siti Aminah',
      customerPhone: '081345678901',
      packageId: 'PKT-B',
      packageName: 'Cuci Kering',
      durationLabel: '2 Hari',
      durationHours: 48,
      unit: 'kg',
      actualWeight: 6.5,
      chargeableWeight: 6.5,
      minWeightApplied: false,
      itemCount: 22,
      pricePerUnit: 6000,
      baseSubtotal: 39000,
      discount: 0,
      totalPrice: 39000,
      amountPaid: 39000,
      remainingBalance: 0,
      paymentStatus: 'Lunas',
      laundryStatus: 'Selesai',
      transactionDate: formatDateISO(-5),
      estimatedDate: formatDateISO(-3),
      createdAt: formatDateTimeISO(-5, 13, 30),
      notes: 'Lipat rapi.'
    }
  ],

  expenses: [
    {
      id: 'EXP-501',
      name: 'Detergen Cair 10 Liter',
      category: 'Detergen',
      date: formatDateISO(0),
      amount: 65000,
      description: 'Pembelian stok detergen utama untuk operasional.'
    },
    {
      id: 'EXP-502',
      name: 'Pewangi Laundry 5 Liter',
      category: 'Pewangi',
      date: formatDateISO(-1),
      amount: 45000,
      description: 'Stok pewangi pakaian.'
    },
    {
      id: 'EXP-503',
      name: 'Token Listrik Mesin Cuci & Setrika',
      category: 'Listrik',
      date: formatDateISO(-2),
      amount: 80000,
      description: 'Pengisian token listrik ruang operasional.'
    },
    {
      id: 'EXP-504',
      name: 'Pelembut Pakaian 5 Liter',
      category: 'Pelembut',
      date: formatDateISO(-4),
      amount: 32000,
      description: 'Pembelian pelembut pakaian.'
    },
    {
      id: 'EXP-505',
      name: 'Pembersihan Filter & Perawatan Dryer',
      category: 'Perawatan Mesin',
      date: formatDateISO(-5),
      amount: 35000,
      description: 'Perawatan berkala mesin pengering.'
    }
  ]
};

class FreshCleanStore {
  constructor() {
    this.state = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (
          parsed &&
          Array.isArray(parsed.packages) &&
          Array.isArray(parsed.transactions) &&
          Array.isArray(parsed.expenses)
        ) {
          if (parsed.settings && parsed.settings.adminName === 'Rina Kartika') {
            parsed.settings.adminName = 'admin 123';
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Gagal membaca LocalStorage, menggunakan data demo awal:', e);
    }
    const fresh = JSON.parse(JSON.stringify(INITIAL_DEMO_DATA));
    this.save(fresh);
    return fresh;
  }

  save(stateToSave = this.state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Gagal menyimpan ke LocalStorage:', e);
    }
  }

  resetDemoData() {
    this.state = JSON.parse(JSON.stringify(INITIAL_DEMO_DATA));
    this.save(this.state);
    return this.state;
  }

  generateId(prefix, collection) {
    const nums = collection
      .map(item => {
        const m = String(item.id).match(/(\d+)$/);
        return m ? parseInt(m[1], 10) : 0;
      })
      .filter(n => !isNaN(n));
    const maxNum = nums.length > 0 ? Math.max(...nums) : 1000;
    return `${prefix}${maxNum + 1}`;
  }
}

window.LaundryStore = new FreshCleanStore();
window.formatDateISO = formatDateISO;
