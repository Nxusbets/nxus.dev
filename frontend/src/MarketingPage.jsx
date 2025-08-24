import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function MarketingPage() {
  return (
    <Box py={16} px={6} maxW="container.md" mx="auto">
      <VStack spacing={6} align="stretch">
        <Heading size="xl" color="teal.700">Marketing Digital</Heading>
        <Text fontSize="lg" color="gray.700">
          Desarrollamos estrategias de marketing digital orientadas a resultados, combinando análisis de datos, optimización de campañas y creatividad para incrementar el alcance y la conversión de nuestros clientes. Nuestro enfoque integral abarca desde la planificación hasta la ejecución y medición de resultados.
        </Text>
        <Heading size="md" color="teal.600" mt={6}>Servicios Especializados</Heading>
        <Text fontSize="md" color="gray.600">
          Ofrecemos servicios de SEO, SEM, analítica avanzada, gestión profesional de redes sociales y publicidad digital, adaptados a las necesidades y objetivos de cada empresa.
        </Text>
      </VStack>
    </Box>
  );
}
