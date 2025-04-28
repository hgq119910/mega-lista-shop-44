
/**
 * Utility functions for formatting values
 */

/**
 * Format a number as Colombian Pesos (COP)
 * @param amount - The amount to format
 * @returns Formatted string with COP currency symbol
 */
export const formatCOP = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
