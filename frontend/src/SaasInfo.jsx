import { Box, Heading, Text, VStack, Image, Stack, Badge } from '@chakra-ui/react';

export default function SaasInfo() {
  return (
    <Box bg="white" p={8} rounded="2xl" shadow="xl" maxW="container.md" mx="auto" my={12}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg" color="teal.700">
          ¿Qué es SaaS?
        </Heading>
        <Text fontSize="md" color="gray.700">
          SaaS (Software as a Service) es un modelo de distribución de software donde las aplicaciones se alojan en la nube y se accede a ellas a través de internet. Esto permite a las empresas utilizar soluciones tecnológicas sin preocuparse por la infraestructura, actualizaciones o mantenimiento.
        </Text>
        <Heading size="md" color="teal.600" mt={6}>
          Ejemplo: Tienda de Abarrotes "El Buen Precio"
        </Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6} align="center">
          <Image
            src="https://images.unsplash.com/photo-1519864600265-abb23843a6c1?auto=format&fit=crop&w=400&q=80"
            alt="Tienda de abarrotes"
            rounded="xl"
            boxSize="180px"
            objectFit="cover"
          />
          <Box>
            <Text fontWeight="bold" color="teal.700" mb={2}>
              Punto de Venta en la Nube
            </Text>
            <Text fontSize="sm" color="gray.600">
              La tienda "El Buen Precio" utiliza nuestro sistema SaaS para gestionar ventas, inventario y reportes desde cualquier dispositivo. El punto de venta está siempre actualizado, seguro y accesible, permitiendo al dueño controlar su negocio en tiempo real.
            </Text>
            <Badge colorScheme="teal" mt={3}>Ejemplo Real</Badge>
          </Box>
        </Stack>
      </VStack>
    </Box>
  );
}
