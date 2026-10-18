import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  Grid,
  Chip,
  IconButton,
  Divider,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  Alert,
} from '@mui/material';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PrintIcon from '@mui/icons-material/Print';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const initialMenuItems = [
  { id: 1, name: 'Quscina Sizzling Sisig', price: 220, category: 'Main' },
  { id: 2, name: 'Special Crispy Pata', price: 480, category: 'Main' },
  { id: 3, name: 'Garlic Rice Bowl', price: 45, category: 'Sides' },
  { id: 4, name: 'Iced Calamansi Cooler', price: 65, category: 'Drinks' },
];

const initialStock = [
  { id: 101, item: 'Pork Belly & Jowl', current: 42, max: 50, unit: 'kg', lowThreshold: 15 },
  { id: 102, item: 'Premium Jasmine Rice', current: 85, max: 100, unit: 'kg', lowThreshold: 20 },
  { id: 103, item: 'Fresh Calamansi Fruit', current: 8, max: 30, unit: 'kg', lowThreshold: 10 },
  { id: 104, item: 'Cooking Oil & Spices', current: 34, max: 40, unit: 'L', lowThreshold: 10 },
];

export default function QuscinaInteractiveSimulator() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [simTab, setSimTab] = useState(0);
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Quscina Sizzling Sisig', price: 220, qty: 1 },
    { id: 3, name: 'Garlic Rice Bowl', price: 45, qty: 2 },
  ]);
  const [stocks, setStocks] = useState(initialStock);
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  const addToOrder = (item) => {
    setOrderItems((prev) => {
      const existing = prev.find((o) => o.id === item.id);
      if (existing) {
        return prev.map((o) => (o.id === item.id ? { ...o, qty: o.qty + 1 } : o));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setOrderItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearOrder = () => setOrderItems([]);

  const subtotal = orderItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (orderItems.length === 0) return;
    setLastOrder({
      items: [...orderItems],
      subtotal,
      tax,
      total,
      invoiceNo: `QUS-${Math.floor(100000 + Math.random() * 900000)}`,
      time: new Date().toLocaleTimeString(),
    });
    setReceiptOpen(true);
    // Deduct stock demonstration
    setStocks((prev) =>
      prev.map((s) => ({
        ...s,
        current: Math.max(1, s.current - 1),
      }))
    );
  };

  const restockItem = (id) => {
    setStocks((prev) =>
      prev.map((s) => (s.id === id ? { ...s, current: Math.min(s.max, s.current + 5) } : s))
    );
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3.5,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDark ? '#0F172A' : '#F8FAFC',
        overflow: 'hidden',
        boxShadow: isDark
          ? '0 15px 30px -10px rgba(0, 0, 0, 0.6)'
          : '0 15px 30px -10px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Top Banner: Simulated Terminal Navigation */}
      <Box
        sx={{
          px: 2.5,
          py: 1.5,
          backgroundColor: isDark ? '#1E293B' : '#EDF2F7',
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 1.5,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RestaurantMenuIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            Quscina Interactive System Simulator
          </Typography>
          <Chip
            label="Live Interactive Demo"
            size="small"
            color="secondary"
            sx={{ height: 20, fontSize: '0.68rem', fontWeight: 700 }}
          />
        </Box>

        <Tabs
          value={simTab}
          onChange={(e, v) => setSimTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 36,
            '& .MuiTab-root': {
              minHeight: 36,
              py: 0.5,
              px: 1.8,
              fontSize: '0.8rem',
              fontWeight: 600,
            },
          }}
        >
          <Tab icon={<PointOfSaleIcon sx={{ fontSize: 16 }} />} iconPosition="start" label="POS Terminal" />
          <Tab icon={<Inventory2OutlinedIcon sx={{ fontSize: 16 }} />} iconPosition="start" label="Inventory Tracker" />
          <Tab icon={<BarChartIcon sx={{ fontSize: 16 }} />} iconPosition="start" label="Sales Analytics" />
        </Tabs>
      </Box>

      {/* Simulator Tab Content */}
      <Box sx={{ p: { xs: 2, md: 3 } }}>
        {/* Tab 0: POS Terminal */}
        {simTab === 0 && (
          <Grid container spacing={2.5}>
            {/* Left: Quick Menu Selection */}
            <Grid item xs={12} sm={7}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.secondary' }}>
                AVAILABLE MENU ITEMS (Click to add to order):
              </Typography>
              <Grid container spacing={1.5}>
                {initialMenuItems.map((item) => (
                  <Grid item xs={6} key={item.id}>
                    <Paper
                      elevation={0}
                      onClick={() => addToOrder(item)}
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        border: `1px solid ${theme.palette.divider}`,
                        backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      <Chip
                        label={item.category}
                        size="small"
                        sx={{ fontSize: '0.65rem', height: 18, mb: 0.5 }}
                      />
                      <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.88rem' }}>
                        {item.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        ₱{item.price.toFixed(2)}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Right: Active Order Ticket */}
            <Grid item xs={12} sm={5}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 2.5,
                  backgroundColor: isDark ? '#161F30' : '#FFFFFF',
                  border: `1px solid ${theme.palette.divider}`,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <ReceiptLongIcon sx={{ fontSize: 18 }} /> Active Order Slip
                  </Typography>
                  {orderItems.length > 0 && (
                    <IconButton size="small" onClick={clearOrder} title="Clear Cart">
                      <DeleteOutlinedIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  )}
                </Box>

                <Box sx={{ flexGrow: 1, maxHeight: 150, overflowY: 'auto', pr: 0.5, mb: 1.5 }}>
                  {orderItems.length === 0 ? (
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', py: 3, textAlign: 'center' }}>
                      No items in order ticket. Click any item on the left to add!
                    </Typography>
                  ) : (
                    orderItems.map((item) => (
                      <Box
                        key={item.id}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          py: 0.7,
                          borderBottom: `1px dashed ${theme.palette.divider}`,
                        }}
                      >
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                            {item.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            ₱{item.price} x {item.qty}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <IconButton size="small" onClick={() => updateQty(item.id, -1)} sx={{ p: 0.4 }}>
                            <RemoveIcon sx={{ fontSize: 14 }} />
                          </IconButton>
                          <Typography variant="caption" sx={{ fontWeight: 700, minWidth: 16, textAlign: 'center' }}>
                            {item.qty}
                          </Typography>
                          <IconButton size="small" onClick={() => updateQty(item.id, 1)} sx={{ p: 0.4 }}>
                            <AddIcon sx={{ fontSize: 14 }} />
                          </IconButton>
                        </Box>
                      </Box>
                    ))
                  )}
                </Box>

                <Divider sx={{ my: 1 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Subtotal:
                  </Typography>
                  <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    ₱{subtotal.toFixed(2)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" color="text.secondary">
                    VAT (12%):
                  </Typography>
                  <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    ₱{tax.toFixed(2)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    Total Amount:
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    ₱{total.toFixed(2)}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="small"
                  startIcon={<PrintIcon />}
                  disabled={orderItems.length === 0}
                  onClick={handleCheckout}
                  sx={{ py: 0.8, borderRadius: 2, fontWeight: 700 }}
                >
                  Process Order & Print
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}

        {/* Tab 1: Inventory Tracker */}
        {simTab === 1 && (
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                REAL-TIME RESTAURANT STOCK LEVELS:
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                *Stock automatically decrements as orders are billed
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {stocks.map((stock) => {
                const percent = Math.round((stock.current / stock.max) * 100);
                const isLow = stock.current <= stock.lowThreshold;

                return (
                  <Grid item xs={12} sm={6} key={stock.id}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: 2.5,
                        border: isLow
                          ? '1px solid #EF4444'
                          : `1px solid ${theme.palette.divider}`,
                        backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {stock.item}
                        </Typography>
                        {isLow ? (
                          <Chip
                            icon={<WarningAmberIcon sx={{ fontSize: '14px !important' }} />}
                            label="Low Stock!"
                            size="small"
                            color="error"
                            sx={{ height: 20, fontSize: '0.65rem', fontWeight: 700 }}
                          />
                        ) : (
                          <Chip
                            label="Optimal"
                            size="small"
                            color="success"
                            variant="outlined"
                            sx={{ height: 20, fontSize: '0.65rem' }}
                          />
                        )}
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8 }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Current: {stock.current} {stock.unit} / {stock.max} {stock.unit}
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                          {percent}%
                        </Typography>
                      </Box>

                      <LinearProgress
                        variant="determinate"
                        value={percent}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          mb: 1.5,
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: isLow ? '#EF4444' : '#10B981',
                          },
                        }}
                      />

                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => restockItem(stock.id)}
                        sx={{ fontSize: '0.72rem', py: 0.4, borderRadius: 1.5 }}
                      >
                        + Restock (+5 {stock.unit})
                      </Button>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}

        {/* Tab 2: Sales Analytics */}
        {simTab === 2 && (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 2.5,
                    backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                    border: `1px solid ${theme.palette.divider}`,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    TODAY'S GROSS REVENUE
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: '#10B981',
                      my: 0.5,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    ₱34,820.00
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    +18% compared to yesterday
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 2.5,
                    backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                    border: `1px solid ${theme.palette.divider}`,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    ORDERS PROCESSED
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      my: 0.5,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    138 Bills
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Average checkout: ~45 seconds
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 2.5,
                    backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                    border: `1px solid ${theme.palette.divider}`,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    TOP SELLING DISH
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: '#F59E0B',
                      my: 0.5,
                    }}
                  >
                    Quscina Sisig
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    64 orders served today
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Alert severity="info" sx={{ mt: 2.5, borderRadius: 2, fontSize: '0.85rem' }}>
              <strong>Module Integration Insight:</strong> When a cashier completes an order ticket, the transaction is immediately indexed into the daily financial reconciliation ledger, preventing cash drawer discrepancies.
            </Alert>
          </Box>
        )}
      </Box>

      {/* Interactive Thermal Receipt Dialog */}
      <Dialog
        open={receiptOpen}
        onClose={() => setReceiptOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            QUSCINA RESTAURANT
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
            Kawit, Cavite • Official Order Receipt
          </Typography>
        </DialogTitle>
        <DialogContent dividers sx={{ borderStyle: 'dashed' }}>
          {lastOrder && (
            <Box sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="caption">Receipt No:</Typography>
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  {lastOrder.invoiceNo}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography variant="caption">Time:</Typography>
                <Typography variant="caption">{lastOrder.time}</Typography>
              </Box>

              <Divider sx={{ my: 1, borderStyle: 'dashed' }} />

              {lastOrder.items.map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                  <Typography variant="caption">
                    {item.qty}x {item.name}
                  </Typography>
                  <Typography variant="caption">₱{(item.price * item.qty).toFixed(2)}</Typography>
                </Box>
              ))}

              <Divider sx={{ my: 1, borderStyle: 'dashed' }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption">Subtotal:</Typography>
                <Typography variant="caption">₱{lastOrder.subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption">Tax (12% VAT):</Typography>
                <Typography variant="caption">₱{lastOrder.tax.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, pt: 1, borderTop: '1px solid #ccc' }}>
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                  TOTAL PAID:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 800, color: theme.palette.primary.main }}>
                  ₱{lastOrder.total.toFixed(2)}
                </Typography>
              </Box>

              <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'text.secondary' }}>
                Thank you for dining at Quscina!
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
          <Button variant="contained" onClick={() => setReceiptOpen(false)} sx={{ borderRadius: 2 }}>
            Close Receipt
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

