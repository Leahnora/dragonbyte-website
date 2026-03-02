// Demo Data Store
const DemoData = {
  // Demo Assets
  assets: [
    {
      id: 1,
      asset_number: 'AST-2024-0001',
      name: 'Dell Latitude 5520 Laptop',
      category: 'Electronics',
      division: 'IT Department',
      section: 'Development',
      status: 'in_use',
      purchase_date: '2024-01-15',
      purchase_cost: 1250.00,
      current_value: 1000.00,
      assigned_to: 'John Doe',
      description: 'Development workstation with 16GB RAM, i7 processor',
      images: ['laptop1.jpg'],
      last_maintenance: '2024-02-01'
    },
    {
      id: 2,
      asset_number: 'AST-2024-0002',
      name: 'HP LaserJet Pro Printer',
      category: 'Electronics',
      division: 'Administration',
      section: 'Office Services',
      status: 'available',
      purchase_date: '2024-01-20',
      purchase_cost: 450.00,
      current_value: 400.00,
      assigned_to: null,
      description: 'Wireless printer with duplex printing',
      images: ['printer1.jpg'],
      last_maintenance: null
    },
    {
      id: 3,
      asset_number: 'AST-2024-0003',
      name: 'Executive Office Chair',
      category: 'Furniture',
      division: 'Human Resources',
      section: 'Office',
      status: 'in_use',
      purchase_date: '2024-02-01',
      purchase_cost: 350.00,
      current_value: 320.00,
      assigned_to: 'Jane Smith',
      description: 'Ergonomic office chair with lumbar support',
      images: ['chair1.jpg'],
      last_maintenance: null
    },
    {
      id: 4,
      asset_number: 'AST-2024-0004',
      name: 'Conference Table',
      category: 'Furniture',
      division: 'Administration',
      section: 'Meeting Rooms',
      status: 'available',
      purchase_date: '2024-02-10',
      purchase_cost: 800.00,
      current_value: 780.00,
      assigned_to: null,
      description: '10-seater conference table with cable management',
      images: ['table1.jpg'],
      last_maintenance: null
    },
    {
      id: 5,
      asset_number: 'AST-2024-0005',
      name: 'MacBook Pro 16"',
      category: 'Electronics',
      division: 'Marketing',
      section: 'Design',
      status: 'maintenance',
      purchase_date: '2023-12-15',
      purchase_cost: 2500.00,
      current_value: 2100.00,
      assigned_to: 'Mike Johnson',
      description: 'Design workstation, M2 Pro chip, 32GB RAM',
      images: ['macbook1.jpg'],
      last_maintenance: '2024-02-28'
    },
    {
      id: 6,
      asset_number: 'AST-2024-0006',
      name: 'Toyota Hilux',
      category: 'Vehicles',
      division: 'Operations',
      section: 'Fleet',
      status: 'in_use',
      purchase_date: '2023-06-01',
      purchase_cost: 35000.00,
      current_value: 32000.00,
      assigned_to: 'Transport Team',
      description: 'Company pickup truck for field operations',
      images: ['vehicle1.jpg'],
      last_maintenance: '2024-02-15'
    },
    {
      id: 7,
      asset_number: 'AST-2024-0007',
      name: 'Samsung 55" Smart TV',
      category: 'Electronics',
      division: 'Administration',
      section: 'Meeting Rooms',
      status: 'available',
      purchase_date: '2024-01-25',
      purchase_cost: 650.00,
      current_value: 600.00,
      assigned_to: null,
      description: '4K UHD display for presentations',
      images: ['tv1.jpg'],
      last_maintenance: null
    },
    {
      id: 8,
      asset_number: 'AST-2024-0008',
      name: 'Industrial Floor Polisher',
      category: 'Equipment',
      division: 'Facilities',
      section: 'Maintenance',
      status: 'damaged',
      purchase_date: '2023-08-10',
      purchase_cost: 1200.00,
      current_value: 900.00,
      assigned_to: 'Cleaning Team',
      description: 'Heavy-duty floor polishing machine',
      images: ['polisher1.jpg'],
      last_maintenance: '2024-02-20'
    },
    {
      id: 9,
      asset_number: 'AST-2024-0009',
      name: 'Standing Desk',
      category: 'Furniture',
      division: 'IT Department',
      section: 'Development',
      status: 'in_use',
      purchase_date: '2024-02-05',
      purchase_cost: 600.00,
      current_value: 580.00,
      assigned_to: 'Sarah Williams',
      description: 'Electric height-adjustable standing desk',
      images: ['desk1.jpg'],
      last_maintenance: null
    },
    {
      id: 10,
      asset_number: 'AST-2024-0010',
      name: 'Canon EOS R6 Camera',
      category: 'Electronics',
      division: 'Marketing',
      section: 'Media',
      status: 'in_use',
      purchase_date: '2023-11-20',
      purchase_cost: 2800.00,
      current_value: 2400.00,
      assigned_to: 'Photography Team',
      description: 'Professional camera for corporate events',
      images: ['camera1.jpg'],
      last_maintenance: '2024-01-15'
    }
  ],

  // Demo Maintenance Logs
  maintenanceLogs: [
    {
      id: 1,
      asset_id: 5,
      asset_name: 'MacBook Pro 16"',
      asset_number: 'AST-2024-0005',
      date: '2024-02-28',
      description: 'Battery replacement and keyboard cleaning',
      cost: 250.00,
      service_provider: 'Apple Authorized Service',
      performed_by: 'Tech Support',
      next_maintenance: '2024-08-28'
    },
    {
      id: 2,
      asset_id: 6,
      asset_name: 'Toyota Hilux',
      asset_number: 'AST-2024-0006',
      date: '2024-02-15',
      description: 'Oil change and tire rotation',
      cost: 180.00,
      service_provider: 'Toyota Service Center',
      performed_by: 'Fleet Manager',
      next_maintenance: '2024-05-15'
    },
    {
      id: 3,
      asset_id: 1,
      asset_name: 'Dell Latitude 5520 Laptop',
      asset_number: 'AST-2024-0001',
      date: '2024-02-01',
      description: 'RAM upgrade from 8GB to 16GB',
      cost: 120.00,
      service_provider: 'IT Department',
      performed_by: 'John Tech',
      next_maintenance: null
    },
    {
      id: 4,
      asset_id: 8,
      asset_name: 'Industrial Floor Polisher',
      asset_number: 'AST-2024-0008',
      date: '2024-02-20',
      description: 'Motor repair - under warranty',
      cost: 0.00,
      service_provider: 'Equipment Supplier',
      performed_by: 'Maintenance Team',
      next_maintenance: '2024-05-20'
    },
    {
      id: 5,
      asset_id: 10,
      asset_name: 'Canon EOS R6 Camera',
      asset_number: 'AST-2024-0010',
      date: '2024-01-15',
      description: 'Sensor cleaning and firmware update',
      cost: 80.00,
      service_provider: 'Canon Service Center',
      performed_by: 'Media Team',
      next_maintenance: '2024-07-15'
    }
  ],

  // Demo Borrowings
  borrowings: [
    {
      id: 1,
      asset_id: 7,
      asset_name: 'Samsung 55" Smart TV',
      asset_number: 'AST-2024-0007',
      borrowed_by: 'Marketing Team',
      borrowed_by_email: 'marketing@company.com',
      borrowed_date: '2024-02-25',
      expected_return_date: '2024-03-05',
      actual_return_date: null,
      purpose: 'Product launch event',
      status: 'active',
      isOverdue: false
    },
    {
      id: 2,
      asset_id: 10,
      asset_name: 'Canon EOS R6 Camera',
      asset_number: 'AST-2024-0010',
      borrowed_by: 'HR Department',
      borrowed_by_email: 'hr@company.com',
      borrowed_date: '2024-02-20',
      expected_return_date: '2024-02-28',
      actual_return_date: null,
      purpose: 'Employee appreciation event',
      status: 'active',
      isOverdue: true
    },
    {
      id: 3,
      asset_id: 2,
      asset_name: 'HP LaserJet Pro Printer',
      asset_number: 'AST-2024-0002',
      borrowed_by: 'Sales Team',
      borrowed_by_email: 'sales@company.com',
      borrowed_date: '2024-02-10',
      expected_return_date: '2024-02-20',
      actual_return_date: '2024-02-19',
      purpose: 'Client presentation materials',
      status: 'returned',
      isOverdue: false
    }
  ],

  // Categories
  categories: ['Electronics', 'Furniture', 'Vehicles', 'Equipment', 'Tools'],
  
  // Divisions
  divisions: ['IT Department', 'Administration', 'Human Resources', 'Marketing', 'Operations', 'Facilities'],
  
  // Sections
  sections: ['Development', 'Office Services', 'Office', 'Meeting Rooms', 'Design', 'Fleet', 'Maintenance', 'Media']
};

// Helper Functions
const Utils = {
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  },

  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  },

  getStatusBadgeClass(status) {
    const classes = {
      available: 'bg-green-100 text-green-800',
      in_use: 'bg-blue-100 text-blue-800',
      maintenance: 'bg-yellow-100 text-yellow-800',
      damaged: 'bg-red-100 text-red-800',
      retired: 'bg-gray-100 text-gray-800'
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
  },

  getStatusLabel(status) {
    const labels = {
      available: 'Available',
      in_use: 'In Use',
      maintenance: 'Maintenance',
      damaged: 'Damaged',
      retired: 'Retired'
    };
    return labels[status] || status;
  },

  calculateDaysUntil(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
};

// Dashboard Statistics
function getDashboardStats() {
  const assets = DemoData.assets;
  return {
    total: assets.length,
    available: assets.filter(a => a.status === 'available').length,
    inUse: assets.filter(a => a.status === 'in_use').length,
    maintenance: assets.filter(a => a.status === 'maintenance').length,
    damaged: assets.filter(a => a.status === 'damaged').length,
    borrowed: DemoData.borrowings.filter(b => b.status === 'active').length
  };
}

// Get overdue borrowings
function getOverdueBorrowings() {
  return DemoData.borrowings.filter(b => b.status === 'active' && b.isOverdue);
}

// Get active borrowings (due soon)
function getActiveBorrowings() {
  return DemoData.borrowings.filter(b => b.status === 'active' && !b.isOverdue);
}

// Get damaged assets
function getDamagedAssets() {
  return DemoData.assets.filter(a => a.status === 'damaged');
}

// Store in localStorage for cross-page access
localStorage.setItem('demoData', JSON.stringify(DemoData));
localStorage.setItem('currentUser', JSON.stringify({
  name: 'Demo User',
  role: 'admin',
  email: 'demo@assetregistry.com'
}));
