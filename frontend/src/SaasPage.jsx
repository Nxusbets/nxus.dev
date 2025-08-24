import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function SaasPage() {
  return (
    <Box py={16} px={6} maxW="container.md" mx="auto">
      <VStack spacing={6} align="stretch">
        <Heading size="xl" color="teal.700">¿Qué es SaaS?</Heading>
        <Text fontSize="lg" color="gray.700">
          El modelo SaaS (Software as a Service) permite a las empresas acceder a soluciones tecnológicas avanzadas a través de la nube, eliminando la necesidad de infraestructura local y reduciendo costos operativos. Las aplicaciones SaaS se actualizan automáticamente, ofrecen alta disponibilidad y escalabilidad, y garantizan la seguridad de los datos.
        </Text>
        <Heading size="md" color="teal.600" mt={6}>Caso de Éxito: Tienda de abarrotes con punto de venta</Heading>
        <Text fontSize="md" color="gray.600">
          Implementamos un sistema SaaS para la gestión integral de ventas, inventario y reportes en una tienda de abarrotes. El propietario accede al punto de venta desde cualquier dispositivo, con información en tiempo real, soporte técnico dedicado y actualizaciones automáticas, optimizando la operación y el control del negocio.
        </Text>
      </VStack>
    </Box>
  );
}
